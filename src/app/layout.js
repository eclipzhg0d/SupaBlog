import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Navigation from "@/components/navigation";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const revalidate = 0;

export const metadata = {
  title: "Supablog ",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          <Navigation />
          <main className="container mx-auto md:px-36 ">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
