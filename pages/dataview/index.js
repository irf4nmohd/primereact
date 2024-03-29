import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/dataview/accessibilitydoc';
import { BasicDoc } from '../../components/doc/dataview/basicdoc';
import { ImportDoc } from '../../components/doc/dataview/importdoc';
import { LayoutDoc } from '../../components/doc/dataview/layoutdoc';
import { LoadingDoc } from '../../components/doc/dataview/loadingdoc';
import { PaginationDoc } from '../../components/doc/dataview/paginationdoc';
import { PrimeFlexDoc } from '../../components/doc/dataview/primeflexdoc';
import { SortingDoc } from '../../components/doc/dataview/sortingdoc';
import { StyleDoc } from '../../components/doc/dataview/styledoc';

const DataViewDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'primeflex',
            label: 'PrimeFlex',
            component: PrimeFlexDoc
        },
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDoc
        },
        {
            id: 'pagination',
            label: 'Pagination',
            component: PaginationDoc
        },
        {
            id: 'sorting',
            label: 'Sorting',
            component: SortingDoc
        },
        {
            id: 'layout',
            label: 'Layout',
            component: LayoutDoc
        },
        {
            id: 'loading',
            label: 'Loading',
            component: LoadingDoc
        },
        {
            id: 'style',
            label: 'Style',
            component: StyleDoc
        },
        {
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc
        }
    ];

    return <DocComponent title="React DataView Component" header="DataView" description="DataView displays data in grid or list layout with pagination and sorting features." componentDocs={docs} apiDocs={['DataView']} className="dataview-demo" />;
};

export default DataViewDemo;
