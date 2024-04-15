import { z } from "zod";

const createOrUpdateInfo = {
	name: z.string().min(3),
	idBoard: z.number(),
	idBoardColumn: z.number(),
};

export const BoardDetCreated = z.object({
	...createOrUpdateInfo,
});

export const BoardDetUpdated = z.object({
	...createOrUpdateInfo,
	id: z.number(),
});

export const BoardDetDeleted = z.object({
	id: z.number(),
});
