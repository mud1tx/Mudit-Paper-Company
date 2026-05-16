"use client";

import { useState } from "react";
import styles from "./Contact.module.css";

const CONTACT_ITEMS = [
  {
    icon: "📍",
    label: "Address",
    val: "Mudit Paper Company, Kanpur, U.P., India",
  },
  { icon: "📞", label: "Phone", val: "+91 98XXX XXXXX" },
  { icon: "✉️", label: "Email", val: "info@muditpapercompany.com" },
  {
    icon: "🕐",
    label: "Business Hours",
    val: "Mon–Sat, 9:00 AM – 6:00 PM IST",
  },
];

const BUSINESS_TYPES = [
  "Bakery / Patisserie",
  "Restaurant / QSR",
  "Food Processing Company",
  "Sweet Shop / Confectionery",
  "FMCG / Retail Brand",
  "Other",
];

const PRODUCTS = [
  "Natural Kraft Paper",
  "Greaseproof Paper",
  "Butter / Wax Paper",
  "Parchment Paper",
  "Tissue & Napkin Paper",
  "Multiple Products",
];

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
    >
      {/* Info */}
      <div className={styles.info}>
        <div className="sectionLabel reveal">Get In Touch</div>
        <h2 className={`sectionTitle reveal ${styles.infoTitle}`}>
          Request a Quote or
          <br />
          Sample Today
        </h2>
        <p className={`${styles.infoText} reveal`}>
          Whether you need a small trial order or a large-volume supply
          agreement, we&apos;re ready to assist. We respond within 24 hours.
        </p>
        <div className={`${styles.details} reveal`}>
          {CONTACT_ITEMS.map(({ icon, label, val }) => (
            <div
              key={label}
              className={styles.item}
            >
              <div className={styles.itemIcon}>{icon}</div>
              <div>
                <div className={styles.itemLabel}>{label}</div>
                <div className={styles.itemVal}>{val}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Form */}
      <div className={`${styles.formWrap} reveal`}>
        <div className={styles.formTitle}>Send Us a Message</div>
        <form
          onSubmit={handleSubmit}
          noValidate
        >
          <div className={styles.formRow}>
            <div className={styles.group}>
              <label>First Name</label>
              <input
                type="text"
                placeholder="Ramesh"
                required
              />
            </div>
            <div className={styles.group}>
              <label>Last Name</label>
              <input
                type="text"
                placeholder="Sharma"
              />
            </div>
          </div>
          <div className={styles.formRow}>
            <div className={styles.group}>
              <label>Phone</label>
              <input
                type="tel"
                placeholder="+91 98XXX XXXXX"
              />
            </div>
            <div className={styles.group}>
              <label>Email</label>
              <input
                type="email"
                placeholder="you@company.com"
                required
              />
            </div>
          </div>
          <div className={styles.group}>
            <label>Business Type</label>
            <select defaultValue="">
              <option
                value=""
                disabled
              >
                Select your business type
              </option>
              {BUSINESS_TYPES.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </div>
          <div className={styles.group}>
            <label>Product of Interest</label>
            <select defaultValue="">
              <option
                value=""
                disabled
              >
                Select a product
              </option>
              {PRODUCTS.map((p) => (
                <option key={p}>{p}</option>
              ))}
            </select>
          </div>
          <div className={styles.group}>
            <label>Message / Requirements</label>
            <textarea
              placeholder="Tell us about your quantity needs, specifications, or any questions..."
              rows={4}
            />
          </div>
          <button
            type="submit"
            className={styles.submit}
          >
            {submitted ? "✓ Enquiry Sent!" : "Send Enquiry →"}
          </button>
        </form>
      </div>
    </section>
  );
}
