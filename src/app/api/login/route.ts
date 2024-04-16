import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { response } from "@/helpers/apiResponses";
import { LoginValidation } from "./validationSchema";
import { compareData } from "@/lib/bcrypt";

export async function POST(req: NextRequest) {
	try {
		const json = await req.json();

		const validation = LoginValidation.safeParse(json);

		if (!validation.success)
			return response({ status: 400, msg: "Validation errors" });

		const user = await prisma.user.findFirst({
			where: {
				username: validation.data.username,
			},
		});

		if (user === null) return response({ status: 404, msg: "user not found" });

		if (!compareData(user.password, validation.data.password))
			return response({ status: 400, msg: "Validation errors" });

		return response({ msg: "Login success" });
	} catch (error) {
		console.error(error);
		return NextResponse.json({ message: "Error" });
	}
}
