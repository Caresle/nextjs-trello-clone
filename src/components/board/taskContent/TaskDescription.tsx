"use client";
import Icon from "@/components/shared/Icon";
import React from "react";
import TaskTextArea from "./TaskTextArea";
import { useToggleItem } from "@/hooks/useToggleItem";

type OnClickFn = () => void;

const PlaceholderDescription = ({ onClick }: { onClick: OnClickFn }) => {
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

const TitleTask = () => {
	return (
		<div className="flex items-center font-bold text-xl">
			<Icon.Misc.AlignLeft />
			<h3 className="ml-2">Description</h3>
		</div>
	);
};

export default function TaskDescription() {
	const textAreaInput = useToggleItem();

	return (
		<>
			<TitleTask />
			{textAreaInput.show ? (
				<TaskTextArea onCancel={textAreaInput.toggleItem} />
			) : (
				<PlaceholderDescription onClick={textAreaInput.toggleItem} />
			)}
		</>
	);
}
