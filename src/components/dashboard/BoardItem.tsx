import React from "react";
import { Card, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import Icon from "../shared/Icon";

export default function BoardItem({ boardName = "" }: { boardName: string }) {
	return (
		<Card className="shadow-md transition-all hover:scale-100 scale-95 cursor-pointer">
			<CardHeader>
				<CardTitle className="text-center">{boardName}</CardTitle>
			</CardHeader>
			<CardFooter className="flex justify-end">
				<Button
					size={"icon"}
					variant={"secondary"}
					className="border border-gray-800"
				>
					<Icon.Misc.Star />
				</Button>
			</CardFooter>
		</Card>
	);
}
