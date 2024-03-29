import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/fileupload/accessibilitydoc';
import { AdvancedDoc } from '../../components/doc/fileupload/advanceddoc';
import { AutoDoc } from '../../components/doc/fileupload/autodoc';
import { BasicDoc } from '../../components/doc/fileupload/basicdoc';
import { CustomUploadDoc } from '../../components/doc/fileupload/customuploaddoc';
import { ImportDoc } from '../../components/doc/fileupload/importdoc';
import { StyleDoc } from '../../components/doc/fileupload/styledoc';
import { TemplateDoc } from '../../components/doc/fileupload/templatedoc';

const FileUploadDemo = () => {
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
            id: 'auto',
            label: 'Auto',
            component: AutoDoc
        },
        {
            id: 'advanced',
            label: 'Advanced',
            component: AdvancedDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        },
        {
            id: 'custom',
            label: 'Custom Upload',
            component: CustomUploadDoc
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

    return (
        <DocComponent
            title="React Upload Component"
            header="FileUpload"
            description="FileUpload is an advanced uploader with dragdrop support, multi file uploads, auto uploading, progress tracking and validations."
            componentDocs={docs}
            apiDocs={['FileUpload']}
        />
    );
};

export default FileUploadDemo;
