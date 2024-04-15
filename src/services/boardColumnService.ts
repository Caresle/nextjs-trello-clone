import { generateMapper } from "./generalServiceStructure";

const BASE_ROUTE = "/board_column";

export const __boardColumnService = {
	...generateMapper(BASE_ROUTE),
};
