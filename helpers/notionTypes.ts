export interface PostData {
	object: string;
	id: string;
	created_time: string;
	last_edited_time: string;
	cover?: null;
	icon?: null;
	parent: Parent;
	archived: boolean;
	properties: Properties;
	url: string;
}
export interface Parent {
	type: string;
	database_id: string;
}
export interface Properties {
	Tags: Tags;
	Slug: SlugOrSubtitle;
	Published: Published;
	Subtitle: SlugOrSubtitle;
	Created: Created;
	Active: Active;
	Name: Name;
	title: {
		title: Array<RichTextEntityOrTitleEntity>;
	};
}
export interface Tags {
	id: string;
	type: string;
	multi_select?: MultiSelectEntity[] | null;
}
export interface MultiSelectEntity {
	id: string;
	name: string;
	color: string;
}
export interface SlugOrSubtitle {
	id: string;
	type: string;
	rich_text?: RichTextEntityOrTitleEntity[] | null;
}
export interface RichTextEntityOrTitleEntity {
	type: string;
	text: Text;
	annotations: Annotations;
	plain_text: string;
	href?: null;
}
export interface Text {
	content: string;
	link?: null;
}
export interface Annotations {
	bold: boolean;
	italic: boolean;
	strikethrough: boolean;
	underline: boolean;
	code: boolean;
	color: string;
}
export interface Published {
	id: string;
	type: string;
	date: Date;
}
export interface Date {
	start: string;
	end?: null;
	time_zone?: null;
}
export interface Created {
	id: string;
	type: string;
	created_time: string;
}
export interface Active {
	id: string;
	type: string;
	checkbox: boolean;
}
export interface Name {
	id: string;
	type: string;
	title?: RichTextEntityOrTitleEntity[] | null;
}
