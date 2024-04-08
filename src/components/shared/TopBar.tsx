import React from "react";
import Image from "next/image";

export default function TopBar() {
	return (
		<div className="w-full p-3 bg-sky-600 text-white font-bold shadow-md">
			{/* Logo Company */}
			<div>
				<div className="w-[64px] h-[64px]"></div>
				{/* <Image src="/logo.jpeg" alt="" width={64} height={64} /> */}
			</div>
		</div>
	);
}
