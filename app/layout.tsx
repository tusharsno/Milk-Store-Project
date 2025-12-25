import "./globals.css";

export const metadata = {
  title: "Milk Store",
  description: "Fresh and organic milk shop",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}

