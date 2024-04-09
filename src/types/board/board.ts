export interface BoardSectionProps {
	label: string;
	items: Array<BoardItemsDefinition>;
}

export interface BoardItemsDefinition {
	title: string;
	meta?: Array<any>;
}

export interface TaskModalDetailsProps {
	title?: string;
	boardName?: string;
	taskId?: number;
}
