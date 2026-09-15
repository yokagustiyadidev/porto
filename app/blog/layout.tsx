import type { Metadata } from "next";
import "./blog.css";

export const metadata: Metadata = {
  title: {
    default: "Blog — Yoka Gustiyadi",
    template: "%s | Blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
