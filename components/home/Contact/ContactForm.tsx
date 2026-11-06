"use client";

import { useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./Contact.module.css";
import { trackEvent } from "@/lib/analytics";
import {
  BUSINESS_TYPES,
  PRODUCT_OPTIONS,
  contactSchema,
  type ContactData,
  type ContactInput,
} from "@/lib/contact";

// ── Field wrapper ─────────────────────────────────────────────────────────────
function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  readonly id: string;
  readonly label: string;
  readonly required?: boolean;
  readonly error?: string;
  readonly children: ReactNode;
}) {
  return (
    <div className={styles.field}>
      <label
        htmlFor={id}
        className={styles.fieldLabel}
      >
        {label}
        {required && (
          <span
            className={styles.req}
            aria-hidden="true"
          >
            {" "}
            *
          </span>
        )}
      </label>
      {children}
      {error && (
        <p
          id={`${id}-error`}
          className={styles.error}
        >
          {error}
        </p>
      )}
    </div>
  );
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "success" | "error" | "limited"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput, unknown, ContactData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      businessType: "",
      product: "",
      message: "",
      website: "",
    },
  });

  const onSubmit = async (data: ContactData) => {
    setStatus("idle");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.status === 429) {
        setStatus("limited");
        return;
      }
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      // Only the product and business type, never the visitor's details
      trackEvent("generate_lead", {
        product: data.product,
        business_type: data.businessType,
      });
      reset();
    } catch {
      setStatus("error");
    }
  };

  const control = (hasError: boolean | undefined) =>
    hasError ? `${styles.control} ${styles.invalid}` : styles.control;

  const ariaFor = (name: keyof ContactInput, required = false) => ({
    "aria-required": required || undefined,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });

  return (
    <div className={`${styles.formCard} reveal`}>
      <h3 className={styles.formTitle}>Send us a message</h3>

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className={styles.form}
      >
        <div className={styles.row}>
          <Field
            id="firstName"
            label="First name"
            required
            error={errors.firstName?.message}
          >
            <input
              id="firstName"
              type="text"
              autoComplete="given-name"
              className={control(!!errors.firstName)}
              {...register("firstName")}
              {...ariaFor("firstName", true)}
            />
          </Field>

          <Field
            id="lastName"
            label="Last name"
            error={errors.lastName?.message}
          >
            <input
              id="lastName"
              type="text"
              autoComplete="family-name"
              className={control(!!errors.lastName)}
              {...register("lastName")}
              {...ariaFor("lastName")}
            />
          </Field>
        </div>

        <div className={styles.row}>
          <Field
            id="phone"
            label="Mobile number"
            error={errors.phone?.message}
          >
            <input
              id="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="98765 43210"
              className={control(!!errors.phone)}
              {...register("phone")}
              {...ariaFor("phone")}
            />
          </Field>

          <Field
            id="email"
            label="Email"
            required
            error={errors.email?.message}
          >
            <input
              id="email"
              type="email"
              autoComplete="email"
              className={control(!!errors.email)}
              {...register("email")}
              {...ariaFor("email", true)}
            />
          </Field>
        </div>

        <Field
          id="businessType"
          label="Business type"
          required
          error={errors.businessType?.message}
        >
          <select
            id="businessType"
            className={control(!!errors.businessType)}
            {...register("businessType")}
            {...ariaFor("businessType", true)}
          >
            <option
              value=""
              disabled
            >
              Select your business type
            </option>
            {BUSINESS_TYPES.map((t) => (
              <option
                key={t}
                value={t}
              >
                {t}
              </option>
            ))}
          </select>
        </Field>

        <Field
          id="product"
          label="Product of interest"
          required
          error={errors.product?.message}
        >
          <select
            id="product"
            className={control(!!errors.product)}
            {...register("product")}
            {...ariaFor("product", true)}
          >
            <option
              value=""
              disabled
            >
              Select a product
            </option>
            {PRODUCT_OPTIONS.map((p) => (
              <option
                key={p}
                value={p}
              >
                {p}
              </option>
            ))}
          </select>
        </Field>

        <Field
          id="message"
          label="Requirements"
          error={errors.message?.message}
        >
          <textarea
            id="message"
            rows={4}
            placeholder="Quantity, GSM, sheet size, delivery location"
            className={control(!!errors.message)}
            {...register("message")}
            {...ariaFor("message")}
          />
        </Field>

        {/* Honeypot: hidden from people and screen readers */}
        <div
          className={styles.hp}
          aria-hidden="true"
        >
          <label htmlFor="website">Website</label>
          <input
            id="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register("website")}
          />
        </div>

        <button
          type="submit"
          className={styles.submit}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending…" : "Send enquiry"}
        </button>

        <div aria-live="polite">
          {status === "success" && (
            <p className={styles.success}>
              Thank you. Your enquiry has been sent.
            </p>
          )}
          {status === "limited" && (
            <p className={styles.serverError}>
              You have sent several enquiries already. Please wait a few minutes
              or call us directly.
            </p>
          )}
          {status === "error" && (
            <p className={styles.serverError}>
              Something went wrong. Please try again or call us directly.
            </p>
          )}
        </div>

        <p className={styles.note}>
          <span className={styles.req}>*</span> Required fields
        </p>
      </form>
    </div>
  );
}
