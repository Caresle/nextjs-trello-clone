"use client";
import React, { ChangeEventHandler, useState } from "react";
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
import Icon from "../shared/Icon";
import Image from "next/image";
import { onLogin } from "./loginActions";
import { ILoginForm } from "@/types/login/login";

export default function LoginCard() {
	const [formData, setFormData] = useState<ILoginForm>({
		username: "",
		password: "",
	});

	const onChangeInput = ({ target }: { target: HTMLInputElement }) => {
		const { name, value } = target;

		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	return (
		<Card className="w-3/12 mx-auto h-fit shadow-xl">
			<CardHeader>
				<CardTitle className="text-center">Welcome to Rello</CardTitle>
				<div className="w-full flex justify-center">
					<Image
						priority
						className="rounded-full"
						src="/logo.jpeg"
						width={128}
						height={128}
						alt=""
					/>
				</div>
			</CardHeader>

			<CardContent>
				<Input
					onChange={onChangeInput}
					placeholder="Username"
					name="username"
					className="mb-4"
				/>
				<Input
					onChange={onChangeInput}
					placeholder="Password"
					name="password"
					type="password"
				/>
			</CardContent>

			<CardFooter className="flex flex-col gap-2">
				<Button className="w-full" onClick={() => onLogin(formData)}>
					<Icon.Actions.Login className="text-2xl mr-2" />
					Login
				</Button>
				<Button className="w-full" variant={"outline"}>
					<Icon.Actions.LogOut className="text-2xl mr-2" />
					Sign Up
				</Button>

				{/* AUTH with social platforms */}
				<Separator className="my-2" />
				<span>Or login with</span>

				<Button className="w-full">
					<Icon.Social.Github className="text-xl mr-2" />
					GitHub
				</Button>
				<Button className="w-full" variant={"outline"}>
					<Icon.Social.Google className="text-xl mr-2" />
					Google
				</Button>
			</CardFooter>
		</Card>
	);
}
