import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Imprint",
  description: "Legal disclosure (Impressum) for hammadriaz.dev pursuant to Austrian law.",
  alternates: { canonical: "/imprint" },
};

export default function ImprintLayout({ children }: { children: React.ReactNode }) {
  return children;
}
