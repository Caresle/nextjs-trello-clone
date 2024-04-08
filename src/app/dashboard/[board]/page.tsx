import BoardSection from "@/components/board/BoardSection";
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
			<div>Board {board}</div>

			{/* Board container */}
			<div className="grid grid-cols-3 gap-3">
				{boards.map((e) => (
					<BoardSection key={e.label} label={e.label} items={e.items} />
				))}
			</div>
		</>
	);
}
