import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/paginator/accessibilitydoc';
import { BasicDoc } from '../../components/doc/paginator/basicdoc';
import { ImagesDoc } from '../../components/doc/paginator/imagesdoc';
import { ImportDoc } from '../../components/doc/paginator/importdoc';
import { LayoutDoc } from '../../components/doc/paginator/layoutdoc';
import { StyleDoc } from '../../components/doc/paginator/styledoc';
import { TemplateDoc } from '../../components/doc/paginator/templatedoc';

const PaginatorDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDoc
        },
        {
            id: 'layout',
            label: 'Layout',
            component: LayoutDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        },
        {
            id: 'images',
            label: 'Images',
            component: ImagesDoc
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

    return <DocComponent title="React Paginator Component" header="Paginator" description="Paginator displays data in paged format and provides navigation between pages." componentDocs={docs} apiDocs={['Paginator']} />;
};

export default PaginatorDemo;
