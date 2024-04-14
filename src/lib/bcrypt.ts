import bcrypt from "bcrypt";

export const encryptData = (data: string) => {
	if (process.env.BCRYPT_SECRET === undefined)
		throw new Error("Set BCRYPT SECRET");

	const salt = bcrypt.genSaltSync(parseInt(process.env.BCRYPT_SECRET));
	const encryptedData = bcrypt.hashSync(data, salt);
	return encryptedData;
};
