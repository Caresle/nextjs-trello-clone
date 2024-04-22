// @ts-ignore
import { toast } from "sonner";

const sonnerConfig = {
	position: "top-right",
	invert: false,
	closeButton: true,
};

export const __sonner = {
	generalError: (msg: string) => {
		toast.error(msg, sonnerConfig);
	},
	generalSuccess: (msg: string) => {
		toast.success(msg, sonnerConfig);
	},
	generalInfo: (msg: string) => {
		toast.info(msg, sonnerConfig);
	},
	generalWarning: (msg: string) => {
		toast.warning(msg, sonnerConfig);
	},
};
