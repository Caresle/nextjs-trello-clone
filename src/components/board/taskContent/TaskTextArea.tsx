import Icon from "@/components/shared/Icon";
import { Button } from "@/components/ui/button";
import { TaskTextAreaProps } from "@/types/board/task";
import { Separator } from "@/components/ui/separator";
import React from "react";

export default function TaskTextArea({ onCancel }: TaskTextAreaProps) {
	return (
		<div className="border border-gray-300 rounded-md w-11/12">
			{/* Format styles */}
			<div className="w-full border-b border-b-gray-400 p-1 flex h-12">
				<Button size={"icon"} variant={"ghost"}>
					<Icon.Misc.LetterCase />
				</Button>
				<Separator orientation="vertical" className="bg-gray-400" />
				<Button size={"icon"} variant={"ghost"}>
					<Icon.Actions.Add />
				</Button>
				<Button size={"icon"} variant={"ghost"}>
					<Icon.Actions.Add />
				</Button>
				<Separator orientation="vertical" className="bg-gray-400" />
			</div>

			{/* Text content */}
			<textarea className="w-full p-2 outline-none"></textarea>

			{/* Action buttons */}
			<div className="mt-3 p-2 flex gap-x-2">
				<Button className="flex gap-x-2">
					<Icon.Actions.Save />
					Save
				</Button>
				<Button className="flex gap-x-2" variant={"ghost"} onClick={onCancel}>
					<Icon.Actions.Close />
					Cancel
				</Button>
			</div>
		</div>
	);
}
