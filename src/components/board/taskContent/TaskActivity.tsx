import Icon from "@/components/shared/Icon";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import React from "react";

export default function TaskActivity() {
	return (
		<>
			<div className="flex items-center justify-between w-11/12 font-bold text-xl my-4">
				<div className="flex items-center">
					<Icon.Misc.AlignLeft />
					<h3 className="ml-2">Activity</h3>
				</div>
				<Button
					size={"sm"}
					variant={"ghost"}
					className="bg-gray-100 hover:bg-gray-200"
				>
					Show details
				</Button>
			</div>
			<div className="flex gap-1">
				<Avatar>
					<AvatarFallback className="bg-amber-500">CN</AvatarFallback>
				</Avatar>
				<div
					className="shadow min-h-fit w-10/12 bg-white rounded-md border border-gray-100
					text-gray-500 flex justify-start items-center p-1 transition-all cursor-pointer
					hover:bg-gray-100
				"
				>
					Write a comment...
				</div>
			</div>
		</>
	);
}
