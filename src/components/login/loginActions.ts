import { LoginValidation } from "@/app/api/login/validationSchema";
import { ILoginForm } from "@/types/login/login";

export const onLogin = (formData: ILoginForm) => {
	const validation = LoginValidation.safeParse(formData);

	if (!validation.success) {
		console.log(validation);
		return false;
	}

	return true;
};
