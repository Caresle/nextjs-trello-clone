import {
	IoLogInOutline,
	IoLogOutOutline,
	IoAdd,
	IoEllipsisHorizontal,
	IoClose,
} from "react-icons/io5";
import { FaGithub, FaGoogle, FaCog, FaRegCreditCard } from "react-icons/fa";
import { GoProjectRoadmap, GoPencil } from "react-icons/go";
import { IoMdHome, IoMdSave } from "react-icons/io";
import { PiStarThin } from "react-icons/pi";
import { MdFormatAlignLeft } from "react-icons/md";
import { RxLetterCaseToggle } from "react-icons/rx";

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
		Save: IoMdSave,
	},
	Social: {
		Github: FaGithub,
		Google: FaGoogle,
	},
	Misc: {
		Home: IoMdHome,
		Star: PiStarThin,
		Card: FaRegCreditCard,
		AlignLeft: MdFormatAlignLeft,
		LetterCase: RxLetterCaseToggle,
	},
};

export default Icon;
