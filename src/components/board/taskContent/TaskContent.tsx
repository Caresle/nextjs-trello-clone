import React from "react";
import TaskDescription from "./TaskDescription";
import TaskActivity from "./TaskActivity";

export default function TaskContent() {
	return (
		<div>
			<TaskDescription />
			<TaskActivity />
		</div>
	);
}
