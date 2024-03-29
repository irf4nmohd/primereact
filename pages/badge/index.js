import React from 'react';
import { AccessibilityDoc } from '../../components/doc/badge/accessibilitydoc';
import { BasicDoc } from '../../components/doc/badge/basicdoc';
import { ButtonDoc } from '../../components/doc/badge/buttondoc';
import { ImportDoc } from '../../components/doc/badge/importdoc';
import { PositionDoc } from '../../components/doc/badge/positiondoc';
import { SeverityDoc } from '../../components/doc/badge/severitydoc';
import { SizeDoc } from '../../components/doc/badge/sizedoc';
import { StyleDoc } from '../../components/doc/badge/styledoc';
import { DocComponent } from '../../components/doc/common/doccomponent';

const BadgeDemo = () => {
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
            id: 'severity',
            label: 'Severity',
            component: SeverityDoc
        },
        {
            id: 'size',
            label: 'Size',
            component: SizeDoc
        },
        {
            id: 'positioned',
            label: 'Position',
            component: PositionDoc
        },
        {
            id: 'button',
            label: 'Button',
            component: ButtonDoc
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

    return <DocComponent title="React Badge Component" header="Badge" description="Badge is a small status indicator for another element." componentDocs={docs} apiDocs={['Badge']} />;
};

export default BadgeDemo;
