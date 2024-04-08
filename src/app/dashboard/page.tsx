import BoardItem from "@/components/dashboard/BoardItem";
import NewBoardCard from "@/components/dashboard/NewBoardCard";
import SideMenuDashboard from "@/components/dashboard/SideMenuDashboard";
import React from "react";

export default function Dashboard() {
	const boards = [
		{
			id: 1,
			name: "Board 1",
		},
		{
			id: 2,
			name: "Board 2",
		},
		{
			id: 3,
			name: "Board 3",
		},
	];

	return (
		<div className="flex flex-row">
			<SideMenuDashboard />
			<div className="w-11/12">
				{/* Actions section */}
				<NewBoardCard />
				{/* Content section */}
				<div className="w-full mt-8 border p-2 rounded-md bg-white shadow grid grid-cols-3 gap-2">
					{boards.map((e) => (
						<BoardItem key={e.id} boardName={e.name} />
					))}
				</div>
			</div>
		</div>
	);
}
