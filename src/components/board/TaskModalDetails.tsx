"use client";
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
import { useToggleItem } from "@/hooks/useToggleItem";

const TitleHeader = ({
	task,
	onClick,
}: {
	task: string;
	onClick: () => void;
}) => {
	return (
		<div onClick={onClick} className="w-full flex items-center">
			<Icon.Misc.Card className="mr-2 text-2xl" />
			<div>{task}</div>
		</div>
	);
};

export default function TaskModalDetails({
	title = "default",
	boardName = "test",
	taskId,
}: TaskModalDetailsProps) {
	const titleHeader = useToggleItem();

	return (
		<Dialog>
			<DialogTrigger className="bg-sky-500">Open</DialogTrigger>
			<DialogContent className="max-w-3xl h-[80%] flex flex-col">
				<DialogHeader className="h-fit">
					<DialogTitle className="flex items-center">
						{titleHeader.show ? (
							<div>Input</div>
						) : (
							<TitleHeader task={title} onClick={titleHeader.toggleItem} />
						)}
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
