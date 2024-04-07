import React from "react";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";

export default function LoginCard() {
	return (
		<Card className="w-3/12 mx-auto h-fit shadow-lg">
			<CardHeader>
				<CardTitle className="text-center">Welcome to Rello</CardTitle>
			</CardHeader>

			<CardContent>
				<Input placeholder="Username" className="mb-4" />
				<Input placeholder="Password" type="password" />
			</CardContent>

			<CardFooter className="flex flex-col gap-1">
				<Button className="w-full">Login</Button>
				<Button className="w-full" variant={"outline"}>
					Sign Up
				</Button>

				{/* AUTH with social platforms */}
				<Separator className="my-2" />
				<span>Or login with</span>
			</CardFooter>
		</Card>
	);
}
