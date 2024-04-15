import { z } from "zod";

const createOrUpdateInfo = {
	username: z.string().min(3),
	password: z.string().min(5),
};

export const UserSchemaCreate = z.object({
	...createOrUpdateInfo,
});

export const UserSchemaUpdate = z.object({
	...createOrUpdateInfo,
	id: z.number(),
});

export const UserSchemaDelete = z.object({
	id: z.number(),
});
