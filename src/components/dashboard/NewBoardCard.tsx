import React from "react";
import { Card, CardHeader } from "../ui/card";
import Icon from "../shared/Icon";

export default function NewBoardCard() {
	return (
		<Card className="w-1/5 bg-white shadow cursor-pointer transition-all hover:brightness-105 hover:shadow-md">
			<CardHeader className="flex justify-center items-center">
				<div className="flex items-center">
					<Icon.Actions.Add className="text-4xl" />
					New Board
				</div>
			</CardHeader>
		</Card>
	);
}
