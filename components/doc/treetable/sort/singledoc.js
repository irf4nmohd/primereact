import React, { useState, useEffect } from 'react';
import { TreeTable } from '../../../lib/treetable/TreeTable';
import { Column } from '../../../lib/column/Column';
import { NodeService } from '../../../../service/NodeService';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function SingleDoc(props) {
    const [nodes, setNodes] = useState([]);

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => {
            setNodes(data);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const code = {
        basic: `
<TreeTable value={nodes}>
    <Column field="name" header="Name" expander sortable></Column>
    <Column field="size" header="Size" sortable></Column>
    <Column field="type" header="Type" sortable></Column>
</TreeTable>
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { NodeService } from '../service/NodeService';

const SingleDoc = () => {
    const [nodes, setNodes] = useState([]);
    const [nodes2, setNodes2] = useState([]);
    

    useEffect(() => {
        NodeService.getTreeTableNodes().then(data => {
            setNodes(data);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="card">
            <TreeTable value={nodes}>
                <Column field="name" header="Name" expander sortable></Column>
                <Column field="size" header="Size" sortable></Column>
                <Column field="type" header="Type" sortable></Column>
            </TreeTable>
        </div>
    );
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { NodeService } from '../service/NodeService';

const SingleDoc = () => {
    const [nodes, setNodes] = useState([]);
    const [nodes2, setNodes2] = useState([]);
    

    useEffect(() => {
        NodeService.getTreeTableNodes().then(data => {
            setNodes(data);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="card">
            <TreeTable value={nodes}>
                <Column field="name" header="Name" expander sortable></Column>
                <Column field="size" header="Size" sortable></Column>
                <Column field="type" header="Type" sortable></Column>
            </TreeTable>
        </div>
    );
}
        `,
        data: `
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...
`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>TreeTable supports single column sorting.</p>
            </DocSectionText>
            <div className="card">
                <TreeTable value={nodes}>
                    <Column field="name" header="Name" expander sortable></Column>
                    <Column field="size" header="Size" sortable></Column>
                    <Column field="type" header="Type" sortable></Column>
                </TreeTable>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
