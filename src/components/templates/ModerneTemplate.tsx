import { CVData } from '../../types/cv';

interface ModerneTemplateProps {
  data: CVData;
}

export default function ModerneTemplate({ data }: ModerneTemplateProps) {
  return (
    <div className="bg-white max-w-[800px] mx-auto flex" style={{ fontFamily: 'Arial, sans-serif' }}>
      <div className="w-1/3 bg-gray-800 text-white p-6">
        {data.avecPhoto && data.photoUrl && (
          <img
            src={data.photoUrl}
            alt="Photo"
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-white"
          />
        )}

        <div className="mb-6">
          <h2 className="text-sm font-bold mb-3 uppercase tracking-wide border-b-2 border-white pb-1">
            Contact
          </h2>
          <div className="text-xs space-y-2">
            <p className="break-words">{data.telephone}</p>
            {data.email && <p className="break-words">{data.email}</p>}
            <p>
              {data.ville}, {data.pays}
            </p>
          </div>
        </div>

        {data.competences.length > 0 && (
          <div className="mb-6">
            <h2 className="text-sm font-bold mb-3 uppercase tracking-wide border-b-2 border-white pb-1">
              Compétences
            </h2>
            <div className="space-y-2">
              {data.competences.map((comp) => (
                <div key={comp.id} className="text-xs">
                  <p className="font-semibold">{comp.nom}</p>
                  <div className="flex items-center mt-1">
                    <div className="flex-1 bg-gray-600 h-1 rounded-full overflow-hidden">
                      <div
                        className="bg-white h-full"
                        style={{
                          width:
                            comp.niveau === 'Expert'
                              ? '100%'
                              : comp.niveau === 'Avancé'
                              ? '75%'
                              : comp.niveau === 'Intermédiaire'
                              ? '50%'
                              : '25%',
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {data.langues.length > 0 && (
          <div className="mb-6">
            <h2 className="text-sm font-bold mb-3 uppercase tracking-wide border-b-2 border-white pb-1">
              Langues
            </h2>
            <div className="space-y-2">
              {data.langues.map((lang) => (
                <div key={lang.id} className="text-xs">
                  <p className="font-semibold">{lang.nom}</p>
                  <p className="text-gray-300">{lang.niveau}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {data.centresInteret.length > 0 && (
          <div className="mb-6">
            <h2 className="text-sm font-bold mb-3 uppercase tracking-wide border-b-2 border-white pb-1">
              Centres d'Intérêt
            </h2>
            <p className="text-xs">{data.centresInteret.join(', ')}</p>
          </div>
        )}
      </div>

      <div className="w-2/3 p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-1">
            {data.prenom} {data.nom}
          </h1>
        </div>

        {data.objectif && (
          <div className="mb-6">
            <h2 className="text-base font-bold text-gray-900 mb-2 uppercase tracking-wide border-l-4 border-gray-800 pl-3">
              Profil
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">{data.objectif}</p>
          </div>
        )}

        {data.experiences.length > 0 && (
          <div className="mb-6">
            <h2 className="text-base font-bold text-gray-900 mb-3 uppercase tracking-wide border-l-4 border-gray-800 pl-3">
              Expérience
            </h2>
            {data.experiences.map((exp) => (
              <div key={exp.id} className="mb-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-sm font-bold text-gray-800">{exp.poste}</h3>
                  <span className="text-xs text-gray-600 whitespace-nowrap ml-2">
                    {exp.dateDebut} - {exp.enCours ? 'Présent' : exp.dateFin}
                  </span>
                </div>
                <p className="text-xs font-semibold text-gray-700 mb-1">
                  {exp.entreprise} | {exp.ville}
                </p>
                {exp.description && (
                  <p className="text-xs text-gray-600 leading-relaxed">{exp.description}</p>
                )}
              </div>
            ))}
          </div>
        )}

        {data.formations.length > 0 && (
          <div className="mb-6">
            <h2 className="text-base font-bold text-gray-900 mb-3 uppercase tracking-wide border-l-4 border-gray-800 pl-3">
              Formation
            </h2>
            {data.formations.map((form) => (
              <div key={form.id} className="mb-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-sm font-bold text-gray-800">{form.diplome}</h3>
                  <span className="text-xs text-gray-600 whitespace-nowrap ml-2">
                    {form.dateDebut} - {form.enCours ? 'En cours' : form.dateFin}
                  </span>
                </div>
                <p className="text-xs font-semibold text-gray-700 mb-1">
                  {form.etablissement} | {form.ville}
                </p>
                {form.description && (
                  <p className="text-xs text-gray-600 leading-relaxed">{form.description}</p>
                )}
              </div>
            ))}
          </div>
        )}

        {data.references.length > 0 && (
          <div className="mb-6">
            <h2 className="text-base font-bold text-gray-900 mb-3 uppercase tracking-wide border-l-4 border-gray-800 pl-3">
              Références
            </h2>
            {data.references.map((ref) => (
              <div key={ref.id} className="mb-3 text-xs">
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
    </div>
  );
}
