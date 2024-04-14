import { response } from "@/helpers/apiResponses";
import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";
import {
	UserSchemaCreate,
	UserSchemaDelete,
	UserSchemaUpdate,
} from "./schemaValidation";
import { encryptData } from "@/lib/bcrypt";

export async function GET() {
	try {
		const users = await prisma.user.findMany();
		return response({ data: users });
	} catch (error) {
		console.error(error);
		return response({ status: 500 });
	}
}

export async function POST(req: NextRequest) {
	try {
		const json = await req.json();

		const validationResult = UserSchemaCreate.safeParse(json);

		if (!validationResult.success) {
			console.log(validationResult.error.errors);
			return response({ msg: "Validation errors", status: 400 });
		}

		const duplicateUser = await prisma.user.findFirst({
			where: {
				username: json.username,
			},
		});

		if (duplicateUser !== null)
			return response({ msg: "duplicate_entry", status: 400 });

		validationResult.data.password = encryptData(
			validationResult.data.password
		);

		const user = await prisma.user.create({
			data: {
				...validationResult.data,
			},
		});

		return response({ data: [user] });
	} catch (error) {
		console.error(error);
		return response({ status: 500 });
	}
}

export async function PUT(req: NextRequest) {
	try {
		const json = await req.json();

		const validationResult = UserSchemaUpdate.safeParse(json);

		if (!validationResult.success) {
			console.log(validationResult.error.errors);
			return response({ msg: "Validation Errros", status: 400 });
		}

		const duplicateUser = await prisma.user.findFirst({
			where: {
				username: json.username,
				NOT: {
					id: json.id,
				},
			},
		});

		if (duplicateUser !== null) {
			console.log(duplicateUser);
			return response({
				msg: "Already exists an user with that username",
				status: 400,
			});
		}

		validationResult.data.password = encryptData(
			validationResult.data.password
		);

		const updatedUser = await prisma.user.update({
			data: validationResult.data,
			where: {
				id: json.id,
			},
		});

		console.log(updatedUser);

		return response();
	} catch (error) {
		console.error(error);
		return response({ status: 500 });
	}
}

export async function DELETE(req: NextRequest) {
	try {
		const json = await req.json();

		const validationResult = UserSchemaDelete.safeParse(json);

		if (!validationResult.success) {
			console.log(validationResult.error.errors);
			return response({ msg: "validation errors", status: 400 });
		}

		const userDeleted = await prisma.user.delete({
			where: {
				id: validationResult.data.id,
			},
		});

		return response({ data: [userDeleted], msg: "User deleted successfully" });
	} catch (error) {
		console.error(error);
		return response({ status: 500 });
	}
}
