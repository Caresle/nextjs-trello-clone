import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ProviderApp from "./providerApp";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Rello",
	description: "",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`bg-gray-50 ${inter.className}`}>
				<ProviderApp>{children}</ProviderApp>
			</body>
		</html>
	);
}
