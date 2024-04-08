import React from "react";
import Image from "next/image";
import Icon from "./Icon";
import TopBarButton from "./buttons/TopBarButton";

export default function TopBar() {
	return (
		<div className="w-full p-3 bg-sky-600 text-white font-bold shadow-md flex">
			{/* Logo Company */}
			{/* <div>
				<div className="w-[48px] h-[48px]"></div>
			</div> */}
			{/* <Image src="/logo.jpeg" alt="" width={64} height={64} /> */}
			{/* <Button
				className="bg-sky-500 hover:bg-sky-700 transition-all border border-sky-500"
				size={"icon"}
			>
				<Icon.Misc.Home className="text-2xl" />
			</Button> */}
			<div>
				<TopBarButton icon={<Icon.Misc.Home />} />

				<TopBarButton icon={<Icon.Actions.GoToProjects />} text="Boards" />
			</div>
		</div>
	);
}
