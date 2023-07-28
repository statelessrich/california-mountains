import "./globals.scss";

export const metadata = {
  title: "Los Angeles Mountains",
  description: "Los Angeles Mountains",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
