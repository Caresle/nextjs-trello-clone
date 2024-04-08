import { BoardItemsDefinition } from "@/types/board/board";
import React from "react";
import { Card, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import Icon from "../shared/Icon";

export default function BoardSectionCard({
	title,
	meta,
}: BoardItemsDefinition) {
	return (
		<Card className="group transition-all hover:border-sky-500 hover:border-2 hover:cursor-pointer border-2 border-white">
			<CardHeader>
				<CardTitle className="text-base flex justify-between items-center">
					<div>{title}</div>
					<Button
						size={"icon"}
						variant={"ghost"}
						className="rounded-full opacity-0 group-hover:opacity-100"
					>
						<Icon.Actions.Edit />
					</Button>
				</CardTitle>
			</CardHeader>
		</Card>
	);
}
