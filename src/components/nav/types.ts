export type MenuItem = {
	text: string;
	url?: string;
	open?: boolean;
	active?: boolean;
	children?: MenuItem[];
};