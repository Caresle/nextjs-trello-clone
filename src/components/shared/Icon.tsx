import { IoLogInOutline, IoLogOutOutline, IoAdd } from "react-icons/io5";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";

const Icon = {
	Actions: {
		Login: IoLogInOutline,
		LogOut: IoLogOutOutline,
		Add: IoAdd,
		GoToProjects: GoProjectRoadmap,
	},
	Social: {
		Github: FaGithub,
		Google: FaGoogle,
	},
};

export default Icon;
