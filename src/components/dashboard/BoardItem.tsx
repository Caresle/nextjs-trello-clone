import React from "react";
import { Card, CardHeader, CardTitle } from "../ui/card";

export default function BoardItem({ boardName = "" }: { boardName: string }) {
	return (
		<Card className="shadow-md transition-all hover:scale-100 scale-95 cursor-pointer">
			<CardHeader>
				<CardTitle className="text-center">{boardName}</CardTitle>
			</CardHeader>
		</Card>
	);
}
