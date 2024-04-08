import { Button } from "@/components/ui/button";
import React from "react";

export default function TopBarButton({
	icon,
	text,
}: {
	icon: React.ReactNode;
	text?: string;
}) {
	return (
		<Button
			className="bg-sky-500 hover:bg-sky-700 transition-all border border-sky-500 ml-1"
			size={text === undefined ? "icon" : "default"}
		>
			{icon}
			{text !== undefined ? <span className="ml-2">{text}</span> : ""}
		</Button>
	);
}
