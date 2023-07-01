import { Poppins } from "next/font/google";

import "./globals.css";

const poppins = Poppins({ weight: "400", subsets: ["devanagari"] });

export const metadata = {
  title: "MusiStudio",
};
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
