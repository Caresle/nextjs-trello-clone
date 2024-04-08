export interface BoardSectionProps {
	label: string;
	items: Array<BoardItemsDefinition>;
}

export interface BoardItemsDefinition {
	title: string;
	meta?: Array<any>;
}
