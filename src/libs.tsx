import { TabDispatchAction } from '@ag108/ct-utils/types/dispatch';
import { PackageLinks, TimeIndexState } from '@ag108/ct-utils';

const PKG_NAME = 'datetime';

export const Relative = ({setTab}: {setTab: TabDispatchAction}) => {
	return <PackageLinks modules={['insert']} pkgName={PKG_NAME} libName='relative' backTab={TimeIndexState} setTab={setTab} />;
}
export const Absolute = ({setTab}: {setTab: TabDispatchAction}) => {
	return <PackageLinks modules={['insert']} pkgName={PKG_NAME} libName='absolute' backTab={TimeIndexState} setTab={setTab} />;
}
export const Special = ({setTab}: {setTab: TabDispatchAction}) => {
	return <PackageLinks modules={['insert']} pkgName={PKG_NAME} libName='special' backTab={TimeIndexState} setTab={setTab} />;
}
export const Custom = ({setTab}: {setTab: TabDispatchAction}) => {
	return <PackageLinks modules={['insert']} pkgName={PKG_NAME} libName='custom' backTab={TimeIndexState} setTab={setTab} />;
}
