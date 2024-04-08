import React from "react";
import Icon from "../shared/Icon";

const SideMenuItem = ({
	label,
	icon,
}: {
	label: string;
	icon: React.ReactNode;
}) => {
	return (
		<div
			className="flex items-center bg-gray-200 p-2 rounded-md transition-all
			cursor-pointer hover:bg-sky-600 hover:scale-105 font-bold hover:text-white
			mx-2
		"
		>
			<div>{icon}</div>
			<div className="ml-1">{label}</div>
		</div>
	);
};

export default function SideMenuDashboard() {
	const items = [
		{
			label: "Projects",
			icon: <Icon.Actions.GoToProjects />,
		},
		{
			label: "Settings",
			icon: <Icon.Actions.Config />,
		},
	];

	return (
		<div className="w-1/6 mr-2 gap-2 flex flex-col">
			{items.map((e) => (
				<SideMenuItem icon={e.icon} label={e.label} key={e.label} />
			))}
		</div>
	);
}
