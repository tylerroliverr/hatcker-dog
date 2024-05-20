import SmoothScrolling from "./components/SmoothScrolling";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "Hatcker Dog - $HDOG",
  description: "clik clak",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Analytics/>
      <body>
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
