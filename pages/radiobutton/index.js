import React from 'react';
import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/radiobutton/accessibilitydoc';
import { DisabledDoc } from '../../components/doc/radiobutton/disableddoc';
import { DynamicDoc } from '../../components/doc/radiobutton/dynamicdoc';
import { FormikDoc } from '../../components/doc/radiobutton/form/formikdoc';
import { HookFormDoc } from '../../components/doc/radiobutton/form/hookformdoc';
import { GroupDoc } from '../../components/doc/radiobutton/groupdoc';
import { ImportDoc } from '../../components/doc/radiobutton/importdoc';
import { InvalidDoc } from '../../components/doc/radiobutton/invaliddoc';
import { StyleDoc } from '../../components/doc/radiobutton/styledoc';

const RadioButtonDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'group',
            label: 'Group',
            component: GroupDoc
        },
        {
            id: 'dynamic',
            label: 'Dynamic',
            component: DynamicDoc
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

    return <DocComponent title="React RadioButton Component" header="RadioButton" description="RadioButton is an extension to standard radio button element with theming." componentDocs={docs} apiDocs={['RadioButton']} />;
};

export default RadioButtonDemo;
