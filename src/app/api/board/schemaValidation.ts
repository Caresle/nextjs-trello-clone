import { z } from "zod";

export const BoardSchemaCreate = z.object({
	name: z.string().min(3),
	idUser: z.number(),
});

export const BoardSchemaUpdate = z.object({
	id: z.number(),
	name: z.string().min(3),
	idUser: z.number(),
});

export const BoardSchemaDelete = z.object({
	id: z.number(),
});
