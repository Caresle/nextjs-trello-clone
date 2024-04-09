import React from "react";
import { Button } from "../ui/button";
import Icon from "../shared/Icon";

const TaskMenuItem = ({
	icon,
	name,
}: {
	icon: React.ReactNode;
	name: string;
}) => {
	return (
		<Button
			variant={"secondary"}
			size={"sm"}
			className="w-full flex justify-start items-center"
		>
			<span className="mr-2 text-xl">{icon}</span>
			<span className="font-bold">{name}</span>
		</Button>
	);
};

export default function TaskRightMenu() {
	const items = [
		{
			icon: <Icon.Actions.Add />,
			name: "Test 1",
		},
	];
	return (
		<div>
			<span className="font-bold text-sm mb-1">Add to the task</span>
			{items.map((e) => (
				<TaskMenuItem icon={e.icon} name={e.name} key={e.name} />
			))}
		</div>
	);
}
