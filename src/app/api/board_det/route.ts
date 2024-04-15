import { response } from "@/helpers/apiResponses";
import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";
import {
	BoardDetCreated,
	BoardDetDeleted,
	BoardDetUpdated,
} from "./schemaValidation";

export async function GET(req: NextRequest) {
	try {
	} catch (error) {
		console.log(error);
		return response({ msg: "Error", status: 500 });
	}
}

export async function POST(req: NextRequest) {
	try {
		const json = await req.json();

		const validationResult = BoardDetCreated.safeParse(json);

		if (!validationResult.success)
			return response({ msg: "Invalid data passed", status: 400 });

		const duplicate = prisma.boardDet.findFirst({
			where: {
				name: validationResult.data.name,
				idBoardColumn: validationResult.data.idBoardColumn,
				idBoard: validationResult.data.idBoard,
			},
		});

		if (duplicate !== null)
			return response({ msg: "duplicate entry", status: 400 });

		const boardDetCreated = await prisma.boardDet.create({
			data: validationResult.data,
		});

		return response({ msg: "Created successfully", data: [boardDetCreated] });
	} catch (error) {
		console.log(error);
		return response({ msg: "Error", status: 500 });
	}
}

export async function PUT(req: NextRequest) {
	try {
		const json = await req.json();

		const validationResult = BoardDetUpdated.safeParse(json);

		if (!validationResult.success)
			return response({ msg: "Validation errors", status: 400 });

		const duplicate = await prisma.boardDet.findFirst({
			where: {
				name: validationResult.data.name,
				idBoardColumn: validationResult.data.idBoardColumn,
				idBoard: validationResult.data.idBoard,
				NOT: {
					id: validationResult.data.id,
				},
			},
		});

		if (duplicate !== null)
			return response({ msg: "Duplicate entry", status: 400 });

		const boardDetUpdated = await prisma.boardDet.update({
			data: validationResult.data,
			where: {
				id: validationResult.data.id,
			},
		});

		return response({ msg: "updated succcessfully", data: [boardDetUpdated] });
	} catch (error) {
		console.log(error);
		return response({ msg: "Error", status: 500 });
	}
}

export async function DELETE(req: NextRequest) {
	try {
		const json = await req.json();

		const validationResult = BoardDetDeleted.safeParse(json);

		if (!validationResult.success)
			return response({ msg: "Invalid data passed", status: 400 });

		const deletedBoardDet = await prisma.boardDet.delete({
			where: {
				id: validationResult.data.id,
			},
		});

		return response({ msg: "Deleted successfully", data: [deletedBoardDet] });
	} catch (error) {
		console.log(error);
		return response({ msg: "Error", status: 500 });
	}
}
