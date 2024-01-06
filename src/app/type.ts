interface Reference {
	_type: 'slug';
	current: string;
}
interface Image {
	_type: 'image';
	asset: Reference;
}
interface Block {
	_key: string;
	_type: 'block';
	children: Span[];
	marksDefs: any[];
	style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'bloackquote';
}
interface Span {
	_key: string;
	_type: 'span';
	marks: string[];
	text: string;
}
export type PostType = {
	deskripsi: Block[];
	judul: string;
	_updatedAt: string;
	mainImage: Image;
	_createdAt: string;
	_type: string;
	_id: string;
};
