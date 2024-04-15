import { generateMapper } from "./generalServiceStructure";

const BASE_ROUTE = "/board";

export const __boardService = {
	...generateMapper(BASE_ROUTE),
};
