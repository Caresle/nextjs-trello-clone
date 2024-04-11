"use client";
import { useToggleItem } from "@/hooks/useToggleItem";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Icon from "../shared/Icon";

export default function BoardHeader({ board }: { board: string }) {
	const toggleInput = useToggleItem();

	return (
		<div className="bg-gray-600/10 p-2 shadow flex gap-3">
			{toggleInput.show ? (
				<Input
					className="w-fit"
					defaultValue={board}
					onBlur={toggleInput.toggleItem}
					autoFocus
				/>
			) : (
				<div
					className="p-2 hover:bg-gray-300 w-fit rounded-md transition-all"
					onClick={toggleInput.toggleItem}
				>
					{board}
				</div>
			)}

			{/* Favorite button */}
			<Button size={"icon"} variant={"outline"}>
				<Icon.Actions.Favorite />
			</Button>
		</div>
	);
}
