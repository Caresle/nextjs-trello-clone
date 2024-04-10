import React from "react";
import TaskRightMenu from "./TaskRightMenu";
import TaskContent from "./taskContent/TaskContent";

export default function TaskDetail() {
	return (
		<div className="grid grid-cols-[1fr,180px]">
			<TaskContent />
			<TaskRightMenu />
		</div>
	);
}
