import { z } from "zod";

const createOrUpdateInfo = {
	name: z.string().min(3),
	idBoard: z.number(),
};

export const BoardColumnSchemaCreate = z.object({
	...createOrUpdateInfo,
});

export const BoardColumnSchemaUpdate = z.object({
	...createOrUpdateInfo,
	id: z.number(),
});

export const BoardColumnSchemaDelete = z.object({
	id: z.number(),
});
