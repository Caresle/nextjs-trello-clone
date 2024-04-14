import { response } from "@/helpers/apiResponses";
import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";
import {
	BoardSchemaCreate,
	BoardSchemaDelete,
	BoardSchemaUpdate,
} from "./schemaValidation";

export async function GET() {
	try {
		const boards = await prisma.boards.findMany();
	} catch (error) {
		console.error(error);
		return response({ status: 500 });
	}
}

export async function POST(req: NextRequest) {
	try {
		const json = await req.json();
		const validationResult = BoardSchemaCreate.safeParse(json);

		if (!validationResult.success) {
			console.log(validationResult.error.errors);
			return response({ msg: "Validation errors", status: 400 });
		}

		const duplicate = await prisma.boards.findFirst({
			where: {
				idUser: validationResult.data.idUser,
				name: validationResult.data.name,
			},
		});

		if (duplicate !== null) {
			console.log(duplicate);
			return response({ msg: "Duplicate entry", status: 400 });
		}

		const board = await prisma.boards.create({
			data: validationResult.data,
		});

		return response({ msg: "created", data: [board] });
	} catch (error) {
		console.error(error);
		return response({ status: 500 });
	}
}

export async function PUT(req: NextRequest) {
	try {
		const json = await req.json();
		const validationResult = BoardSchemaUpdate.safeParse(json);

		if (!validationResult.success) {
			console.log(validationResult.error.errors);
			return response({ msg: "Validation errors", status: 400 });
		}

		const duplicate = await prisma.boards.findFirst({
			where: {
				name: validationResult.data.name,
				idUser: validationResult.data.idUser,
				NOT: {
					id: validationResult.data.id,
				},
			},
		});

		if (duplicate !== null) {
			console.log(duplicate);
			return response({
				msg: "duplicate entry",
				status: 400,
			});
		}

		await prisma.boards.update({
			data: validationResult.data,
			where: {
				id: validationResult.data.id,
			},
		});

		return response({ msg: "Updated result" });
	} catch (error) {
		console.error(error);
		return response({ status: 500 });
	}
}

export async function DELETE(req: NextRequest) {
	try {
		const json = await req.json();
		const validationResult = BoardSchemaDelete.safeParse(json);

		if (!validationResult.success) {
			console.log(validationResult.error.errors);
			return response({ msg: "Validation errors", status: 400 });
		}

		await prisma.boards.delete({
			where: {
				id: validationResult.data.id,
			},
		});

		return response({ msg: "Deleted successfully" });
	} catch (error) {
		console.error(error);
		return response({ status: 500 });
	}
}
