"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import styles from "./Contact.module.css";

const ContactForm = dynamic(() => import("./ContactForm"), { ssr: false });

// The form libraries are the largest script on the site, so they load only when
// the visitor nears the form. The .reveal class stays here on the outer box:
// useReveal only watches elements that exist when the page first loads.
export default function ContactFormLoader() {
  const slot = useRef<HTMLDivElement>(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    if (!slot.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNear(true);
          observer.disconnect();
        }
      },
      { rootMargin: "800px" },
    );
    observer.observe(slot.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={slot}
      className="reveal"
    >
      {near ? (
        <ContactForm />
      ) : (
        // Same size as the form, so nothing jumps when it arrives
        <div className={`${styles.formCard} ${styles.formPlaceholder}`} />
      )}
    </div>
  );
}
