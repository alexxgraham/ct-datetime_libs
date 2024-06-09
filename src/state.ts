import { Tab } from '@ag108/ct-utils/types/main';

const Closed = false;

export const InsertState: Tab = {
	main: Closed,
	math: {
		index: Closed,
		chain: Closed,
		arithmetic: Closed,
		geometry: Closed,
		algebra: Closed,
		calculus: Closed,
		matrix: Closed,
		algorithm: Closed,
	},
	time: { index: Closed, relative: true, absolute: Closed, special: Closed, custom: Closed },
	file: { index: Closed, image: Closed, pdf: Closed, other: Closed },
	paint: { index: Closed, red: Closed, blue: Closed, green: Closed, yellow: Closed, magenta: Closed, cyan: Closed },
	emote: { index: Closed, faces: Closed, foodBev: Closed, nature: Closed, objects: Closed, hearts: Closed, flags: Closed, moreSymbols: Closed },
};
