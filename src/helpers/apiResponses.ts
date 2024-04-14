import { NextResponse } from "next/server";

interface ApiResponse {
	data?: any[];
	msg?: String;
	status?: number;
}

export const response = (
	{ data = [], msg = "", status = 200 }: ApiResponse = {
		data: [],
		msg: "",
		status: 200,
	}
) => {
	return NextResponse.json(
		{
			data,
			msg,
		},
		{
			status,
		}
	);
};
