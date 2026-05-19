export interface KeyValue {
  label: string;
  value: string;
  icon: string;
}

export interface Feature {
  title: string;
  desc: string;
  icon: string;
}

export interface Application {
  label: string;
  icon: string;
}

export interface ProductData {
  name: string;
  tagline: string;
  description: string;
  image: string;
  breadcrumb: string;
  tag?: string;
  keyValues: KeyValue[];
  features: Feature[];
  applications: Application[];
  gallery?: string[];
  ctaTitle?: string;
  phone?: string;
  email?: string;
}
