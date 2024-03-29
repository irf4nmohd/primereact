import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/multistatecheckbox/accessibilitydoc';
import { BasicDoc } from '../../components/doc/multistatecheckbox/basicdoc';
import { DisabledDoc } from '../../components/doc/multistatecheckbox/disableddoc';
import { FormikDoc } from '../../components/doc/multistatecheckbox/form/formikdoc';
import { HookFormDoc } from '../../components/doc/multistatecheckbox/form/hookformdoc';
import { ImportDoc } from '../../components/doc/multistatecheckbox/importdoc';
import { InvalidDoc } from '../../components/doc/multistatecheckbox/invaliddoc';
import { StyleDoc } from '../../components/doc/multistatecheckbox/styledoc';

const MultiStateCheckboxDemo = () => {
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
            id: 'invalid',
            label: 'Invalid',
            component: InvalidDoc
        },
        {
            id: 'disabled',
            label: 'Disabled',
            component: DisabledDoc
        },
        {
            id: 'form',
            label: 'Form',
            description: 'Compatibility with popular React form libraries.',
            children: [
                {
                    id: 'formik',
                    label: 'Formik',
                    component: FormikDoc
                },
                {
                    id: 'hookform',
                    label: 'Hook Form',
                    component: HookFormDoc
                }
            ]
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

    return <DocComponent title="React MultiStateCheckbox Component" header="MultiStateCheckbox" description="MultiStateCheckbox is used to select a state from given options." componentDocs={docs} apiDocs={['MultiStateCheckbox']} />;
};

export default MultiStateCheckboxDemo;
