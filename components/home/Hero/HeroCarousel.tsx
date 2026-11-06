"use client";

import {
  useState,
  useEffect,
  useSyncExternalStore,
  type FocusEvent,
  type ReactNode,
} from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

type Slide = {
  readonly src: string;
  readonly alt: string;
};

type Props = {
  readonly slides: readonly Slide[];
  /** Hero text, rendered on the server and passed through untouched */
  readonly children: ReactNode;
};

const INTERVAL_MS = 2000;
const TRANSITION_MS = 800;

// Reads the visitor's "reduce motion" setting and re-renders when it changes.
// The server snapshot is false, so autoplay is the default before hydration.
const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
const subscribeReducedMotion = (onChange: () => void) => {
  const mq = window.matchMedia(REDUCED_MOTION);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
};
const getReducedMotion = () => window.matchMedia(REDUCED_MOTION).matches;
const getReducedMotionOnServer = () => false;

export default function HeroCarousel({ slides, children }: Props) {
  const total = slides.length;
  // A copy of the first slide is added to the end so the loop animates
  // smoothly instead of jumping back across all the slides.
  const track = [...slides, slides[0]];

  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const reduceMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotion,
    getReducedMotionOnServer,
  );

  const paused = hovered || focused || reduceMotion;

  // Autoplay: move one slide to the left every INTERVAL_MS
  useEffect(() => {
    if (paused) return;
    const id = setTimeout(() => {
      setAnimate(true);
      setIndex((i) => i + 1);
    }, INTERVAL_MS);
    return () => clearTimeout(id);
  }, [index, paused]);

  // When the cloned first slide is showing, snap back to the real first slide
  useEffect(() => {
    if (index !== total) return;
    const id = setTimeout(() => {
      setAnimate(false);
      setIndex(0);
    }, TRANSITION_MS);
    return () => clearTimeout(id);
  }, [index, total]);

  const goTo = (i: number) => {
    setAnimate(true);
    setIndex(i);
  };

  // Only resume when focus leaves the hero, not when it moves between
  // its own links and buttons
  const onBlur = (e: FocusEvent<HTMLElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
      setFocused(false);
    }
  };

  const shown = index % total;

  return (
    <section
      className={styles.hero}
      id="home"
      aria-roledescription="carousel"
      aria-label="Featured products"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={onBlur}
    >
      {/* Slides */}
      <div
        className={`${styles.track} ${animate ? "" : styles.trackInstant}`}
        style={{ transform: `translateX(-${index * 100}%)` }}
        aria-live={paused ? "polite" : "off"}
      >
        {track.map((slide, i) => {
          const isClone = i === total;
          const isActive = !isClone && i === shown;
          return (
            <div
              key={`${slide.src}-${i}`}
              className={styles.slide}
              role={isClone ? undefined : "group"}
              aria-roledescription={isClone ? undefined : "slide"}
              aria-label={isClone ? undefined : `${i + 1} of ${total}`}
              aria-hidden={!isActive}
            >
              <Image
                src={slide.src}
                alt={isClone ? "" : slide.alt}
                fill
                sizes="100vw"
                priority={i === 0}
                // The clone is the same file as slide 1, already downloaded.
                // Lazy here would make Next.js treat the LCP image as lazy.
                loading={isClone ? "eager" : undefined}
                className={styles.img}
              />
            </div>
          );
        })}
      </div>

      <div
        className={styles.overlay}
        aria-hidden="true"
      />

      {children}

      {/* Dots */}
      <div className={styles.dots}>
        {slides.map((s, i) => (
          <button
            key={s.src}
            type="button"
            className={`${styles.dot} ${shown === i ? styles.dotActive : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={shown === i}
          />
        ))}
      </div>
    </section>
  );
}
