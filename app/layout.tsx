import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "RAGEQUIT — Done Playing by Their Rules", description: "Not giving up. Just done playing by their rules." };
export default function RootLayout({ children }: { children: React.ReactNode }) { return (<html lang="en"><body>{children}</body></html>); }
