import { z } from "zod";

const createOrUpdateInfo = {
	name: z.string().min(3),
	idUser: z.number(),
};

export const BoardSchemaCreate = z.object({
	...createOrUpdateInfo,
});

export const BoardSchemaUpdate = z.object({
	...createOrUpdateInfo,
	id: z.number(),
});

export const BoardSchemaDelete = z.object({
	id: z.number(),
});
