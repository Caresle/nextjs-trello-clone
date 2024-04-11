import { useState } from "react";

export function useToggleItem() {
	const [show, setShow] = useState(false);

	const toggleItem = () => {
		setShow(!show);
	};

	return {
		show,
		toggleItem,
	};
}
