import TopBar from "@/components/shared/TopBar";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<section>
			{/* Topbar */}
			<TopBar />

			{/* Content */}
			<div className="p-3 mt-4">{children}</div>
		</section>
	);
}
