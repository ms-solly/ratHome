import "./globals.css";
import Navigation from "./components/Navigation";
import { Footer } from "./components/Footer";
import Background from "@/components/Bg";

export const metadata = {
  title: "ratHome Portfolio",
  description: "A cozy and creative portfolio website",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="chuhiya.png" type="image/x-icon" />
      </head>
      <body className="bg-gradient-to-br from-gray-900 to-black text-white relative">
        <Background />
        <Navigation />
        <main className="min-h-screen flex flex-col items-start justify-center px-12 text-white relative z-10 mt-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
