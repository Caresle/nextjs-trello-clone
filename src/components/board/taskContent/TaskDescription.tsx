"use client";
import Icon from "@/components/shared/Icon";
import React, { useState } from "react";
import TaskTextArea from "./TaskTextArea";

const PlaceholderDescription = ({ onClick }: { onClick: () => void }) => {
	return (
		<div
			onClick={onClick}
			className="bg-gray-200 hover:bg-gray-300 mt-2 h-20 w-11/12 rounded-md font-bold p-2 transition-all
			cursor-pointer text-gray-600
		"
		>
			Add a more detailed description...
		</div>
	);
};

export default function TaskDescription() {
	const [showTextArea, setShowTextArea] = useState(false);

	const toggleTextArea = () => {
		setShowTextArea(!showTextArea);
	};

	return (
		<>
			<div className="flex items-center font-bold text-xl">
				<Icon.Misc.AlignLeft />
				<h3 className="ml-2">Description</h3>
			</div>
			{showTextArea ? (
				<TaskTextArea onCancel={toggleTextArea} />
			) : (
				<PlaceholderDescription onClick={toggleTextArea} />
			)}
		</>
	);
}
