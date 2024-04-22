export interface ILoginForm {
	username: string;
	password: string;
}

export interface IApiResponse {
	data?: any[];
	msg?: String;
	status?: number;
}
