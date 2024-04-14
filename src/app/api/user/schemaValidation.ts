import { z } from "zod";

export const UserSchemaCreate = z.object({
	username: z.string().min(3),
	password: z.string().min(5),
});

export const UserSchemaUpdate = z.object({
	id: z.number(),
	username: z.string().min(3),
	password: z.string().min(5),
});

export const UserSchemaDelete = z.object({
	id: z.number(),
});
