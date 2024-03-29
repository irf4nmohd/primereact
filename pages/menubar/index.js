import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/menubar/accessibilitydoc';
import { BasicDoc } from '../../components/doc/menubar/basicdoc';
import { ImportDoc } from '../../components/doc/menubar/importdoc';
import { StyleDoc } from '../../components/doc/menubar/styledoc';
import { TemplateDoc } from '../../components/doc/menubar/templatedoc';

const MenubarDemo = () => {
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
            id: 'template',
            label: 'Template',
            component: TemplateDoc
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

    return <DocComponent title="React Navbar Component" header="Menubar" description="Menubar also known as Navbar, is a horizontal menu component" componentDocs={docs} apiDocs={['Menubar', 'MenuItem']} />;
};

export default MenubarDemo;
