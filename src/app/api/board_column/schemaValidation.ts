import { z } from "zod";

export const BoardColumnSchemaCreate = z.object({
	name: z.string().min(3),
	idBoard: z.number(),
});

export const BoardColumnSchemaUpdate = z.object({
	id: z.number(),
	name: z.string().min(3),
	idBoard: z.number(),
});

export const BoardColumnSchemaDelete = z.object({
	id: z.number(),
});
