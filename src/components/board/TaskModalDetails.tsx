import React from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../ui/dialog";
import { TaskModalDetailsProps } from "@/types/board/board";
import Icon from "../shared/Icon";
import TaskDetail from "./TaskDetail";

export default function TaskModalDetails({
	title = "default",
	boardName = "test",
	taskId,
}: TaskModalDetailsProps) {
	return (
		<Dialog>
			<DialogTrigger className="bg-sky-500">Open</DialogTrigger>
			<DialogContent className="max-w-3xl h-[80%] flex flex-col">
				<DialogHeader className="h-fit">
					<DialogTitle className="flex items-center">
						<Icon.Misc.Card className="mr-2 text-2xl" />
						<div>{title}</div>
					</DialogTitle>
					<DialogDescription>
						In the board
						<span className="italic"> {boardName}</span>
					</DialogDescription>
				</DialogHeader>

				<TaskDetail />
			</DialogContent>
		</Dialog>
	);
}
