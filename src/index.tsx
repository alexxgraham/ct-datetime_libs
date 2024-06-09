import { TabDispatchAction } from '@ag108/ct-utils/types/dispatch';
import { PackageLibraries } from '@ag108/ct-utils/types/main';

import { PackageIndexLink } from '@ag108/ct-utils';

import { InsertState } from './state';

const libraries: PackageLibraries = [
	{ name: 'relative', tabState: InsertState },
	{ name: 'absolute', tabState: InsertState },
	{ name: 'special', tabState: InsertState },
	{ name: 'custom', tabState: InsertState }
]

export const IndexDatetime = ({setTab}: {setTab: TabDispatchAction}) => {
	return (
		<article className='flex flex-col pt-2'>
			<p className='text-accent uppercase'>
				[<PackageIndexLink setTab={setTab} />] date & time libraries ({libraries.length}):
			</p>
			<ol className='flex flex-col px-4 items-start h-[140px] overflow-scroll'>
				{libraries.map((library, i) => (
					<li key={i + 1}>
						<button onClick={() => setTab(library.tabState)} className='uppercase outline-none'>
							{i + 1}) [<span className='hover:underline cursor-pointer'>{library.name}</span>]
						</button>
					</li>
				))}
			</ol>
		</article>
	);
}

export { Relative, Absolute, Special, Custom } from '~/libs'