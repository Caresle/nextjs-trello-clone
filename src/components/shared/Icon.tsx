import {
	IoLogInOutline,
	IoLogOutOutline,
	IoAdd,
	IoEllipsisHorizontal,
	IoClose,
} from "react-icons/io5";
import { FaGithub, FaGoogle, FaCog, FaRegCreditCard } from "react-icons/fa";
import { GoProjectRoadmap, GoPencil } from "react-icons/go";
import { IoMdHome } from "react-icons/io";
import { PiStarThin } from "react-icons/pi";
const Icon = {
	Actions: {
		Login: IoLogInOutline,
		LogOut: IoLogOutOutline,
		Add: IoAdd,
		GoToProjects: GoProjectRoadmap,
		Config: FaCog,
		Options: IoEllipsisHorizontal,
		Edit: GoPencil,
		Close: IoClose,
	},
	Social: {
		Github: FaGithub,
		Google: FaGoogle,
	},
	Misc: {
		Home: IoMdHome,
		Star: PiStarThin,
		Card: FaRegCreditCard,
	},
};

export default Icon;
