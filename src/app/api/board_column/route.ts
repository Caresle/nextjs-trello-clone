import { response } from "@/helpers/apiResponses";
import { NextRequest } from "next/server";
import {
	BoardColumnSchemaCreate,
	BoardColumnSchemaDelete,
	BoardColumnSchemaUpdate,
} from "./schemaValidation";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
	try {
	} catch (error) {
		console.error(error);
		return response({ status: 500, msg: "error" });
	}
}

export async function POST(req: NextRequest) {
	try {
		const json = await req.json();

		const validationResult = BoardColumnSchemaCreate.safeParse(json);

		if (!validationResult.success)
			return response({ msg: "invalid data passed", status: 400 });

		const duplicate = await prisma.boardColumn.findFirst({
			where: {
				name: validationResult.data.name,
				idBoard: validationResult.data.idBoard,
			},
		});

		if (duplicate !== null) {
			return response({ msg: "duplicate entry", status: 400 });
		}

		const boardColumn = await prisma.boardColumn.create({
			data: validationResult.data,
		});

		return response({ msg: "Created successfully", data: [boardColumn] });
	} catch (error) {
		console.error(error);
		return response({ status: 500, msg: "error" });
	}
}

export async function PUT(req: NextRequest) {
	try {
		const json = await req.json();

		const validationResult = BoardColumnSchemaUpdate.safeParse(json);

		if (!validationResult.success)
			return response({ msg: "Invalid data passed", status: 400 });

		const duplicate = await prisma.boardColumn.findFirst({
			where: {
				name: validationResult.data.name,
				idBoard: validationResult.data.idBoard,
				NOT: {
					id: validationResult.data.id,
				},
			},
		});

		if (duplicate !== null)
			return response({ msg: "Duplicate entry", status: 400 });

		const boardColumnUpdate = await prisma.boardColumn.update({
			data: validationResult.data,
			where: {
				id: validationResult.data.id,
			},
		});

		return response({ msg: "Updated successfully", data: [boardColumnUpdate] });
	} catch (error) {
		console.error(error);
		return response({ status: 500, msg: "error" });
	}
}

export async function DELETE(req: NextRequest) {
	try {
		const json = await req.json();

		const validationResult = BoardColumnSchemaDelete.safeParse(json);

		if (!validationResult.success)
			return response({ msg: "Validation errors", status: 400 });

		const boardColumnDeleted = await prisma.boardColumn.delete({
			where: {
				id: validationResult.data.id,
			},
		});

		return response({
			msg: "deleted successfully",
			data: [boardColumnDeleted],
		});
	} catch (error) {
		console.error(error);
		return response({ status: 500, msg: "error" });
	}
}
