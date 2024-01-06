import { Metadata, Viewport } from 'next';
import { metadata as studioMetada } from 'next-sanity/studio/metadata';
import { viewport as studioViewport } from 'next-sanity/studio/viewport';
import Studio from './Studio';
export const metadata: Metadata = {
	...studioMetada,
	title: 'studio',
};
export const viewport: Viewport = {
	...studioViewport,
	interactiveWidget: 'resizes-content',
};
export default function StudioPage() {
	return <Studio />;
}
