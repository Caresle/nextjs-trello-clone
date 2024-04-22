import { generalError } from "@/helpers/errorsHandler";
import { post } from "@/lib/axios";
import { IApiResponse } from "@/types/login/login";

const BASE_ROUTE = "/login";

export const __login = {
	post: async (payload = {}): Promise<IApiResponse | null> => {
		try {
			const res = await post(BASE_ROUTE, payload);
			return res.data;
		} catch (error) {
			return generalError(error);
		}
	},
};
