import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { BoardSectionProps } from "@/types/board/board";
import BoardSectionCard from "./BoardSectionCard";
import Icon from "../shared/Icon";
import { Button } from "../ui/button";

export default function BoardSection({ label, items }: BoardSectionProps) {
	return (
		<Card className="border border-gray-300 bg-gray-100">
			<CardHeader className="flex flex-col justify-center h-10">
				<CardTitle className="flex justify-between text-base items-center">
					<div>{label}</div>
					<Button
						size={"icon"}
						variant={"ghost"}
						className="hover:bg-slate-200 transition-all"
					>
						<Icon.Actions.Options />
					</Button>
				</CardTitle>
			</CardHeader>

			{/* Sub Card items */}
			<CardContent className="flex flex-col gap-2">
				{items.map((e) => (
					<BoardSectionCard title={e.title} meta={e.meta} key={e.title} />
				))}
			</CardContent>
		</Card>
	);
}
