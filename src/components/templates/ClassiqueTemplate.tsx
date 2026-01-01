import { CVData } from '../../types/cv';

interface ClassiqueTemplateProps {
  data: CVData;
}

export default function ClassiqueTemplate({ data }: ClassiqueTemplateProps) {
  return (
    <div className="bg-white p-8 max-w-[800px] mx-auto" style={{ fontFamily: 'Georgia, serif' }}>
      <div className="text-center mb-6 pb-4 border-b-2 border-gray-800">
        {data.avecPhoto && data.photoUrl && (
          <img
            src={data.photoUrl}
            alt="Photo"
            className="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
          />
        )}
        <h1 className="text-3xl font-bold text-gray-900 mb-1">
          {data.prenom} {data.nom}
        </h1>
        <div className="text-sm text-gray-600 space-y-1">
          <p>{data.telephone}</p>
          {data.email && <p>{data.email}</p>}
          <p>
            {data.ville}, {data.pays}
          </p>
        </div>
      </div>

      {data.objectif && (
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-2 uppercase border-b border-gray-400">
            Objectif Professionnel
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">{data.objectif}</p>
        </div>
      )}

      {data.experiences.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-3 uppercase border-b border-gray-400">
            Expériences Professionnelles
          </h2>
          {data.experiences.map((exp) => (
            <div key={exp.id} className="mb-4">
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-base font-bold text-gray-800">{exp.poste}</h3>
                <span className="text-sm text-gray-600">
                  {exp.dateDebut} - {exp.enCours ? 'Présent' : exp.dateFin}
                </span>
              </div>
              <p className="text-sm font-semibold text-gray-700 mb-1">
                {exp.entreprise} - {exp.ville}
              </p>
              {exp.description && (
                <p className="text-sm text-gray-600 leading-relaxed">{exp.description}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {data.formations.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-3 uppercase border-b border-gray-400">
            Formations
          </h2>
          {data.formations.map((form) => (
            <div key={form.id} className="mb-4">
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-base font-bold text-gray-800">{form.diplome}</h3>
                <span className="text-sm text-gray-600">
                  {form.dateDebut} - {form.enCours ? 'En cours' : form.dateFin}
                </span>
              </div>
              <p className="text-sm font-semibold text-gray-700 mb-1">
                {form.etablissement} - {form.ville}
              </p>
              {form.description && (
                <p className="text-sm text-gray-600 leading-relaxed">{form.description}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {data.competences.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-3 uppercase border-b border-gray-400">
            Compétences
          </h2>
          <div className="grid grid-cols-2 gap-2">
            {data.competences.map((comp) => (
              <div key={comp.id} className="text-sm">
                <span className="font-semibold text-gray-800">{comp.nom}</span>
                <span className="text-gray-600"> - {comp.niveau}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {data.langues.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-3 uppercase border-b border-gray-400">
            Langues
          </h2>
          <div className="grid grid-cols-2 gap-2">
            {data.langues.map((lang) => (
              <div key={lang.id} className="text-sm">
                <span className="font-semibold text-gray-800">{lang.nom}</span>
                <span className="text-gray-600"> - {lang.niveau}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {data.centresInteret.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-3 uppercase border-b border-gray-400">
            Centres d'Intérêt
          </h2>
          <p className="text-sm text-gray-700">{data.centresInteret.join(', ')}</p>
        </div>
      )}

      {data.references.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-3 uppercase border-b border-gray-400">
            Références
          </h2>
          {data.references.map((ref) => (
            <div key={ref.id} className="mb-3 text-sm">
              <p className="font-bold text-gray-800">{ref.nom}</p>
              <p className="text-gray-700">
                {ref.poste} - {ref.entreprise}
              </p>
              <p className="text-gray-600">
                {ref.telephone} {ref.email && `| ${ref.email}`}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
