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
	];

	return (
		<div className="w-1/12 mr-2">
			{items.map((e) => (
				<SideMenuItem icon={e.icon} label={e.label} key={e.label} />
			))}
		</div>
	);
}
