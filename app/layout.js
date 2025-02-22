import ThemeRegistry from '@/components/ThemeRegistry';
import "./globals.css";

export const metadata = {
  title: "Steph Philipps' Portfolio",
  description: "Steph Philipps' Portfolio detailing all of her amazing work.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeRegistry>
        <body>
          {children}
        </body>
      </ThemeRegistry>
    </html>
  );
}