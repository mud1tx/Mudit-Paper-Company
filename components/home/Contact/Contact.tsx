"use client";

import { useState } from "react";
import styles from "./Contact.module.css";
import { COMPANY } from "@/lib/config"; // ← from config

const CONTACT_ITEMS = [
  {
    icon: "📍",
    label: "Address",
    val: COMPANY.address, // ← from config
    href: `https://maps.google.com/?q=Mudit+Paper+Company+Kanpur+India`,
  },
  {
    icon: "📞",
    label: "Phone",
    val: COMPANY.phone, // ← from config
    href: `tel:${COMPANY.phone}`,
  },
  {
    icon: "✉️",
    label: "Email",
    val: COMPANY.email, // ← from config
    href: `mailto:${COMPANY.email}`,
  },
  {
    icon: "🕐",
    label: "Business Hours",
    val: "Mon–Sat, 9:00 AM – 6:00 PM IST",
    href: null,
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
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

        {/* Contact details — semantic address tag */}
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
          onSubmit={handleSubmit}
          noValidate
          aria-label="Contact form"
        >
          <div className={styles.formRow}>
            <div className={styles.group}>
              <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                type="text"
                placeholder="Ramesh"
                required
                autoComplete="given-name"
              />
            </div>
            <div className={styles.group}>
              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                type="text"
                placeholder="Sharma"
                autoComplete="family-name"
              />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.group}>
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                type="tel"
                placeholder="+91 98XXX XXXXX"
                autoComplete="tel"
              />
            </div>
            <div className={styles.group}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="you@company.com"
                required
                autoComplete="email"
              />
            </div>
          </div>

          <div className={styles.group}>
            <label htmlFor="businessType">Business Type</label>
            <select
              id="businessType"
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
          </div>

          <div className={styles.group}>
            <label htmlFor="product">Product of Interest</label>
            <select
              id="product"
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
          </div>

          <div className={styles.group}>
            <label htmlFor="message">Message / Requirements</label>
            <textarea
              id="message"
              placeholder="Tell us about your quantity needs, specifications, or any questions..."
              rows={4}
            />
          </div>

          <button
            type="submit"
            className={styles.submit}
            aria-live="polite"
            disabled={submitted}
          >
            {submitted ? "✓ Enquiry Sent!" : "Send Enquiry →"}
          </button>
        </form>
      </div>
    </section>
  );
}
