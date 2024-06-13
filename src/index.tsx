import { TabDispatchAction } from '@ag108/ct-utils/types/dispatch';
import { PackageLibraries } from '@ag108/ct-utils/types/main';

import { cn, PackageIndexLink } from '@ag108/ct-utils';

import { AbsoluteState, CustomState, RelativeState, SpecialState } from './state';

const libraries: PackageLibraries = [
	{ name: 'relative', tabState: RelativeState },
	{ name: 'absolute', tabState: AbsoluteState },
	{ name: 'special', tabState: SpecialState },
	{ name: 'custom', tabState: CustomState },
];

export const IndexDatetime = ({ setTab }: { setTab: TabDispatchAction }) => {
	return (
		<article className={cn('ct-utils_flex', 'ct-utils_flex-column', 'ct-utils_pad-top-2')}>
			<p className={cn('ct-utils_text-accent', 'ct-utils_uppercase')}>
				[<PackageIndexLink setTab={setTab} />] date & time libraries ({libraries.length}):
			</p>
			<ol className={cn('ct-utils_flex', 'ct-utils_flex-column', 'ct-utils_pad-x-4', 'ct-utils_items-start', 'ct-utils_h-15rem', 'ct-utils_overflow-scroll')}>
				{libraries.map((library, i) => (
					<li key={i + 1}>
						<button onClick={() => setTab(library.tabState)} className={cn('ct-utils_uppercase', 'ct-utils_outline-none')}>
							{i + 1}) [<span className={cn('ct-utils_hover underline', 'ct-utils_cursor-pointer')}>{library.name}</span>]
						</button>
					</li>
				))}
			</ol>
		</article>
	);
};

export { Relative, Absolute, Special, Custom } from '~/libs';
