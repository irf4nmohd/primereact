import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/tieredmenu/accessibilitydoc';
import { BasicDoc } from '../../components/doc/tieredmenu/basicdoc';
import { ImportDoc } from '../../components/doc/tieredmenu/importdoc';
import { PopupDoc } from '../../components/doc/tieredmenu/popupdoc';
import { StyleDoc } from '../../components/doc/tieredmenu/styledoc';

const TieredMenuDemo = () => {
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
            id: 'popup',
            label: 'Popup',
            component: PopupDoc
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

    return <DocComponent title="React TieredMenu Component" header="TieredMenu" description="TieredMenu displays submenus in nested overlays." componentDocs={docs} apiDocs={['TieredMenu', 'MenuItem']} />;
};

export default TieredMenuDemo;
