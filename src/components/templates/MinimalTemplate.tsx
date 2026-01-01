import { CVData } from '../../types/cv';

interface MinimalTemplateProps {
  data: CVData;
}

export default function MinimalTemplate({ data }: MinimalTemplateProps) {
  return (
    <div className="bg-white p-8 max-w-[800px] mx-auto" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
      <div className="mb-6 pb-3 border-b border-gray-900">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          {data.prenom.toUpperCase()} {data.nom.toUpperCase()}
        </h1>
        <div className="text-xs text-gray-700">
          {data.telephone} {data.email && `• ${data.email}`} • {data.ville}, {data.pays}
        </div>
      </div>

      {data.objectif && (
        <div className="mb-5">
          <p className="text-xs text-gray-800 leading-relaxed">{data.objectif}</p>
        </div>
      )}

      {data.experiences.length > 0 && (
        <div className="mb-5">
          <h2 className="text-sm font-bold text-gray-900 mb-2 uppercase">Expérience</h2>
          {data.experiences.map((exp) => (
            <div key={exp.id} className="mb-3">
              <div className="flex justify-between items-baseline">
                <h3 className="text-xs font-bold text-gray-900">{exp.poste}</h3>
                <span className="text-xs text-gray-600">
                  {exp.dateDebut} - {exp.enCours ? 'Présent' : exp.dateFin}
                </span>
              </div>
              <p className="text-xs text-gray-700 italic mb-1">
                {exp.entreprise}, {exp.ville}
              </p>
              {exp.description && (
                <p className="text-xs text-gray-700 leading-relaxed">{exp.description}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {data.formations.length > 0 && (
        <div className="mb-5">
          <h2 className="text-sm font-bold text-gray-900 mb-2 uppercase">Formation</h2>
          {data.formations.map((form) => (
            <div key={form.id} className="mb-3">
              <div className="flex justify-between items-baseline">
                <h3 className="text-xs font-bold text-gray-900">{form.diplome}</h3>
                <span className="text-xs text-gray-600">
                  {form.dateDebut} - {form.enCours ? 'En cours' : form.dateFin}
                </span>
              </div>
              <p className="text-xs text-gray-700 italic mb-1">
                {form.etablissement}, {form.ville}
              </p>
              {form.description && (
                <p className="text-xs text-gray-700 leading-relaxed">{form.description}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {data.competences.length > 0 && (
        <div className="mb-5">
          <h2 className="text-sm font-bold text-gray-900 mb-2 uppercase">Compétences</h2>
          <p className="text-xs text-gray-700">
            {data.competences.map((comp) => comp.nom).join(' • ')}
          </p>
        </div>
      )}

      {data.langues.length > 0 && (
        <div className="mb-5">
          <h2 className="text-sm font-bold text-gray-900 mb-2 uppercase">Langues</h2>
          <p className="text-xs text-gray-700">
            {data.langues.map((lang) => `${lang.nom} (${lang.niveau})`).join(' • ')}
          </p>
        </div>
      )}

      {data.centresInteret.length > 0 && (
        <div className="mb-5">
          <h2 className="text-sm font-bold text-gray-900 mb-2 uppercase">Centres d'Intérêt</h2>
          <p className="text-xs text-gray-700">{data.centresInteret.join(' • ')}</p>
        </div>
      )}

      {data.references.length > 0 && (
        <div className="mb-5">
          <h2 className="text-sm font-bold text-gray-900 mb-2 uppercase">Références</h2>
          {data.references.map((ref) => (
            <div key={ref.id} className="mb-2 text-xs text-gray-700">
              <span className="font-bold">{ref.nom}</span> - {ref.poste}, {ref.entreprise} | {ref.telephone}
              {ref.email && ` | ${ref.email}`}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
