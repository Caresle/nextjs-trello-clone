import BoardHeader from "@/components/board/BoardHeader";
import BoardSection from "@/components/board/BoardSection";
import TaskModalDetails from "@/components/board/TaskModalDetails";
import Icon from "@/components/shared/Icon";
import { Button } from "@/components/ui/button";
import { BoardSectionProps } from "@/types/board/board";
import React from "react";

type BoardParams = {
	board: string;
};

export default function Board({ params }: { params: BoardParams }) {
	const { board } = params;

	const boards: BoardSectionProps[] = [
		{
			label: "Todo",
			items: [
				{
					title: "Task pending 1",
				},
			],
		},
		{
			label: "Doing",
			items: [
				{
					title: "Task doing 1",
				},
				{
					title: "Task doing 2",
				},
				{
					title: "Task doing 3",
				},
			],
		},
		{
			label: "Done",
			items: [
				{
					title: "Task 1 done",
				},
			],
		},
	];

	return (
		<>
			<BoardHeader board={board} />
			<TaskModalDetails />
			{/* Board container */}
			<div className="grid grid-cols-4 gap-3 p-3">
				{boards.map((e) => (
					<BoardSection key={e.label} label={e.label} items={e.items} />
				))}
				{/* New Board button */}
				<Button variant={"secondary"}>
					<Icon.Actions.Add className="text-3xl h-20" />
				</Button>
			</div>
		</>
	);
}
