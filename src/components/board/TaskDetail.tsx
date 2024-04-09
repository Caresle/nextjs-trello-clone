import React from "react";
import TaskRightMenu from "./TaskRightMenu";

export default function TaskDetail() {
	return (
		<div className="grid grid-cols-[1fr,180px]">
			<div>Content</div>
			<TaskRightMenu />
		</div>
	);
}
