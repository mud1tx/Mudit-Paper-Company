import type { ReactNode } from "react";

// One "Label: value" row in a legal page's contact block. With an href the
// value is shown as a link (mailto:, tel:).
export interface ContactDetail {
  readonly label: string;
  readonly value: string;
  readonly href?: string;
}

export interface LegalSection {
  /** Anchor for the contents list, e.g. "#cookies" */
  readonly id: string;
  readonly title: string;
  readonly paragraphs: readonly string[];
  readonly list?: readonly string[];
  readonly details?: readonly ContactDetail[];
  readonly closing?: ReactNode;
}
