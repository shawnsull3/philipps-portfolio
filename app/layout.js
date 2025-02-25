import ThemeRegistry from '@/components/ThemeRegistry';
import NavBar from "@/components/NavBar"; 
import '@fontsource/poppins/400.css';  // Regular weight
import '@fontsource/poppins/600.css';  // Semi-bold
import '@fontsource/raleway/400.css';  // Regular weight
import '@fontsource/raleway/700.css';  // Bold weight
import "./globals.css";

export const metadata = {
  title: "Steph Philipps' Portfolio",
  description: "Steph Philipps' Portfolio detailing all of her amazing work.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <NavBar />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}