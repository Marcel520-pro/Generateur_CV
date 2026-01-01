import { CVData, TemplateType } from '../types/cv';
import ClassiqueTemplate from './templates/ClassiqueTemplate';
import ModerneTemplate from './templates/ModerneTemplate';
import MinimalTemplate from './templates/MinimalTemplate';

interface CVPreviewProps {
  data: CVData;
  template: TemplateType;
}

export default function CVPreview({ data, template }: CVPreviewProps) {
  const renderTemplate = () => {
    switch (template) {
      case 'classique':
        return <ClassiqueTemplate data={data} />;
      case 'moderne':
        return <ModerneTemplate data={data} />;
      case 'minimal':
        return <MinimalTemplate data={data} />;
      default:
        return <ClassiqueTemplate data={data} />;
    }
  };

  return (
    <div id="cv-preview" className="bg-gray-100 p-4 rounded-lg shadow-inner overflow-auto">
      <div className="bg-white shadow-lg mx-auto" style={{ minHeight: '297mm' }}>
        {renderTemplate()}
      </div>
    </div>
  );
}
