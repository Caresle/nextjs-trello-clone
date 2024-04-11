"use client";
import TopBar from "@/components/shared/TopBar";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
	const pathName = usePathname();
	const [classList, setClassList] = useState("p-3 mt-4");
	useEffect(() => {
		if (pathName.match(/dashboard\/\d/)) {
			setClassList("mt-0 p-0");
		}
	}, [pathName]);

	return (
		<section>
			{/* Topbar */}
			<TopBar />

			{/* Content */}
			<div className={classList}>{children}</div>
		</section>
	);
}
