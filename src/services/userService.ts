import { generateMapper } from "./generalServiceStructure";

const BASE_ROUTE = "/user";

export const __userService = {
	...generateMapper(BASE_ROUTE),
};
