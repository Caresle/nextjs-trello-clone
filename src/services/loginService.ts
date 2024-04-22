import { generalError } from "@/helpers/errorsHandler";
import { post } from "@/lib/axios";

const BASE_ROUTE = "/login";

export const __login = {
	post: async (payload = {}) => {
		try {
			const res = await post(BASE_ROUTE, payload);
			console.log(res);
		} catch (error) {
			return generalError(error);
		}
	},
};
