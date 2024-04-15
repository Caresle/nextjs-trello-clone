import { generateMapper } from "./generalServiceStructure";

const BASE_ROUTE = "/board_det";

export const __boardDetService = {
	...generateMapper(BASE_ROUTE),
};
