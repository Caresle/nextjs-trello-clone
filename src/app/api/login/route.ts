import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
	try {
		const users = await prisma.userPrisma.findMany();
		return NextResponse.json({
			message: "Hello",
			data: users,
		});
	} catch (error) {
		console.error(error);
		return NextResponse.json({ message: "error" });
	}
}
