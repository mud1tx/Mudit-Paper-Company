"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import styles from "./Contact.module.css";
import { COMPANY } from "@/lib/config";

// ── Validation schema ─────────────────────────────────────────────────────────
const contactSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name too long"),
  lastName: z.string().max(50, "Last name too long").optional(),
  phone: z
    .string()
    .regex(/^[6-9][0-9]{9}$/, "Enter a valid 10-digit mobile number")
    .optional()
    .or(z.literal("")),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Enter a valid email address"),
  businessType: z.string().min(1, "Please select your business type"),
  product: z.string().min(1, "Please select a product"),
  message: z
    .string()
    .max(1000, "Message too long — max 1000 characters")
    .optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

// ── Static data ───────────────────────────────────────────────────────────────
const CONTACT_ITEMS = [
  {
    icon: "📍",
    label: "Address",
    val: COMPANY.address,
    href: "https://maps.google.com/?q=Mudit+Paper+Company+Kanpur+India",
    ariaLabel: `View ${COMPANY.address} on Google Maps`,
  },
  {
    icon: "📞",
    label: "Phone",
    val: COMPANY.phone,
    href: `tel:${COMPANY.phone}`,
    ariaLabel: `Call us at ${COMPANY.phone}`,
  },
  {
    icon: "✉️",
    label: "Email",
    val: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
    ariaLabel: `Email us at ${COMPANY.email}`,
  },
  {
    icon: "🕐",
    label: "Business Hours",
    val: "Mon–Sat, 9:00 AM – 6:00 PM IST",
    href: null,
    ariaLabel: null,
  },
] as const;

const BUSINESS_TYPES = [
  "Bakery / Patisserie",
  "Restaurant / QSR",
  "Food Processing Company",
  "Sweet Shop / Confectionery",
  "FMCG / Retail Brand",
  "Other",
] as const;

const PRODUCTS = [
  "Greaseproof Paper",
  "Glassine Paper",
  "Printed Greaseproof / Glassine",
  "Golden Foil Laminated Paper",
  "Ladoo Katori / Muffin Cup Liner",
  "Multiple Products",
] as const;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setServerError(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSubmitted(true);
        reset();
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setServerError(true);
      }
    } catch {
      setServerError(true);
    }
  };

  return (
    <section
      className={styles.section}
      id="contact"
      aria-labelledby="contact-title"
    >
      {/* Info */}
      <div className={styles.info}>
        <div className="sectionLabel reveal">Get In Touch</div>
        <h2
          id="contact-title"
          className={`sectionTitle reveal ${styles.infoTitle}`}
        >
          Request a Quote or
          <br />
          Sample Today
        </h2>
        <p className={`${styles.infoText} reveal`}>
          Whether you need a small trial order or a large-volume supply
          agreement, we&apos;re ready to assist. We respond within 24 hours.
        </p>

        <address className={`${styles.details} reveal`}>
          {CONTACT_ITEMS.map(({ icon, label, val, href }) => (
            <div
              key={label}
              className={styles.item}
            >
              <div
                className={styles.itemIcon}
                role="img"
                aria-label={label}
              >
                {icon}
              </div>
              <div>
                <div className={styles.itemLabel}>{label}</div>
                {href ? (
                  <a
                    href={href}
                    className={styles.itemVal}
                    aria-label={ariaLabel ?? undefined}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {val}
                  </a>
                ) : (
                  <div className={styles.itemVal}>{val}</div>
                )}
              </div>
            </div>
          ))}
        </address>
      </div>

      {/* Form */}
      <div className={`${styles.formWrap} reveal`}>
        <div className={styles.formTitle}>Send Us a Message</div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          aria-label="Contact form"
        >
          <div className={styles.formRow}>
            <div className={styles.group}>
              <label htmlFor="firstName">
                First Name <span className={styles.req}>*</span>
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="Ramesh"
                autoComplete="given-name"
                className={errors.firstName ? styles.inputError : ""}
                {...register("firstName")}
              />
              {errors.firstName && (
                <span
                  className={styles.error}
                  role="alert"
                >
                  {errors.firstName.message}
                </span>
              )}
            </div>

            <div className={styles.group}>
              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                type="text"
                placeholder="Sharma"
                autoComplete="family-name"
                {...register("lastName")}
              />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.group}>
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                type="tel"
                placeholder="98XXX XXXXX"
                autoComplete="tel"
                className={errors.phone ? styles.inputError : ""}
                {...register("phone")}
              />
              {errors.phone && (
                <span
                  className={styles.error}
                  role="alert"
                >
                  {errors.phone.message}
                </span>
              )}
            </div>

            <div className={styles.group}>
              <label htmlFor="email">
                Email <span className={styles.req}>*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@company.com"
                autoComplete="email"
                className={errors.email ? styles.inputError : ""}
                {...register("email")}
              />
              {errors.email && (
                <span
                  className={styles.error}
                  role="alert"
                >
                  {errors.email.message}
                </span>
              )}
            </div>
          </div>

          <div className={styles.group}>
            <label htmlFor="businessType">
              Business Type <span className={styles.req}>*</span>
            </label>
            <select
              id="businessType"
              className={errors.businessType ? styles.inputError : ""}
              {...register("businessType")}
              defaultValue=""
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
            {errors.businessType && (
              <span
                className={styles.error}
                role="alert"
              >
                {errors.businessType.message}
              </span>
            )}
          </div>

          <div className={styles.group}>
            <label htmlFor="product">
              Product of Interest <span className={styles.req}>*</span>
            </label>
            <select
              id="product"
              className={errors.product ? styles.inputError : ""}
              {...register("product")}
              defaultValue=""
            >
              <option
                value=""
                disabled
              >
                Select a product
              </option>
              {PRODUCTS.map((p) => (
                <option
                  key={p}
                  value={p}
                >
                  {p}
                </option>
              ))}
            </select>
            {errors.product && (
              <span
                className={styles.error}
                role="alert"
              >
                {errors.product.message}
              </span>
            )}
          </div>

          <div className={styles.group}>
            <label htmlFor="message">Message / Requirements</label>
            <textarea
              id="message"
              placeholder="Tell us about your quantity needs, specifications, or any questions..."
              rows={4}
              {...register("message")}
            />
          </div>

          {/* Server error */}
          {serverError && (
            <p
              className={styles.serverError}
              role="alert"
            >
              Something went wrong. Please try again or call us directly.
            </p>
          )}

          <button
            type="submit"
            className={styles.submit}
            disabled={isSubmitting || submitted}
          >
            {isSubmitting
              ? "Sending..."
              : submitted
                ? "✓ Enquiry Sent!"
                : "Send Enquiry →"}
          </button>

          <p className={styles.reqNote}>
            <span className={styles.req}>*</span> Required fields
          </p>
        </form>
      </div>
    </section>
  );
}
