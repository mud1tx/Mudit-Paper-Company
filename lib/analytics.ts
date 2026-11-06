// Google Analytics events. Never pass anything that identifies a person (name,
// phone, email, message text): Google's terms forbid it.
declare global {
  interface Window {
    gtag?: (
      command: "event",
      name: string,
      params?: Record<string, string>,
    ) => void;
  }
}

// Does nothing when analytics is off, such as in development
export function trackEvent(
  name: string,
  params?: Record<string, string>,
): void {
  window.gtag?.("event", name, params);
}
