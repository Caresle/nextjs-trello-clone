import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { NextApiRequest } from "next";

export async function GET() {
	try {
		const users = await prisma.user.findMany();
		return NextResponse.json({
			message: "Hello",
			data: users,
		});
	} catch (error) {
		console.error(error);
		return NextResponse.json({ message: "error" });
	}
}

export async function POST(req: NextApiRequest) {
	try {
		console.log(req.body);
		return NextResponse.json({
			message: "OK",
		});
	} catch (error) {
		console.error(error);
		return NextResponse.json({ message: "Error" });
	}
}
