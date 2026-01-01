import { ChangeEvent } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { CVData, Experience, Formation, Competence, Langue, Reference } from '../types/cv';

interface CVFormProps {
  data: CVData;
  onChange: (data: CVData) => void;
}

export default function CVForm({ data, onChange }: CVFormProps) {
  const handleChange = (field: keyof CVData, value: any) => {
    onChange({ ...data, [field]: value });
  };

  const addExperience = () => {
    const newExp: Experience = {
      id: Date.now().toString(),
      poste: '',
      entreprise: '',
      ville: '',
      dateDebut: '',
      dateFin: '',
      enCours: false,
      description: '',
    };
    handleChange('experiences', [...data.experiences, newExp]);
  };

  const updateExperience = (id: string, field: keyof Experience, value: any) => {
    const updated = data.experiences.map((exp) =>
      exp.id === id ? { ...exp, [field]: value } : exp
    );
    handleChange('experiences', updated);
  };

  const removeExperience = (id: string) => {
    handleChange('experiences', data.experiences.filter((exp) => exp.id !== id));
  };

  const addFormation = () => {
    const newForm: Formation = {
      id: Date.now().toString(),
      diplome: '',
      etablissement: '',
      ville: '',
      dateDebut: '',
      dateFin: '',
      enCours: false,
      description: '',
    };
    handleChange('formations', [...data.formations, newForm]);
  };

  const updateFormation = (id: string, field: keyof Formation, value: any) => {
    const updated = data.formations.map((form) =>
      form.id === id ? { ...form, [field]: value } : form
    );
    handleChange('formations', updated);
  };

  const removeFormation = (id: string) => {
    handleChange('formations', data.formations.filter((form) => form.id !== id));
  };

  const addCompetence = () => {
    const newComp: Competence = {
      id: Date.now().toString(),
      nom: '',
      niveau: 'Intermédiaire',
    };
    handleChange('competences', [...data.competences, newComp]);
  };

  const updateCompetence = (id: string, field: keyof Competence, value: any) => {
    const updated = data.competences.map((comp) =>
      comp.id === id ? { ...comp, [field]: value } : comp
    );
    handleChange('competences', updated);
  };

  const removeCompetence = (id: string) => {
    handleChange('competences', data.competences.filter((comp) => comp.id !== id));
  };

  const addLangue = () => {
    const newLang: Langue = {
      id: Date.now().toString(),
      nom: '',
      niveau: 'Intermédiaire',
    };
    handleChange('langues', [...data.langues, newLang]);
  };

  const updateLangue = (id: string, field: keyof Langue, value: any) => {
    const updated = data.langues.map((lang) =>
      lang.id === id ? { ...lang, [field]: value } : lang
    );
    handleChange('langues', updated);
  };

  const removeLangue = (id: string) => {
    handleChange('langues', data.langues.filter((lang) => lang.id !== id));
  };

  const addReference = () => {
    const newRef: Reference = {
      id: Date.now().toString(),
      nom: '',
      poste: '',
      entreprise: '',
      telephone: '',
      email: '',
    };
    handleChange('references', [...data.references, newRef]);
  };

  const updateReference = (id: string, field: keyof Reference, value: any) => {
    const updated = data.references.map((ref) =>
      ref.id === id ? { ...ref, [field]: value } : ref
    );
    handleChange('references', updated);
  };

  const removeReference = (id: string) => {
    handleChange('references', data.references.filter((ref) => ref.id !== id));
  };

  const handlePhotoUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        handleChange('photoUrl', reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-8">
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Informations personnelles</h2>

        <div className="mb-4">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
            <input
              type="checkbox"
              checked={data.avecPhoto}
              onChange={(e) => handleChange('avecPhoto', e.target.checked)}
              className="rounded"
            />
            Inclure une photo
          </label>
          {data.avecPhoto && (
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
            />
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Prénom <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={data.prenom}
              onChange={(e) => handleChange('prenom', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Jean"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nom <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={data.nom}
              onChange={(e) => handleChange('nom', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Dupont"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Téléphone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              value={data.telephone}
              onChange={(e) => handleChange('telephone', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="+225 07 XX XX XX XX"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={data.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="jean.dupont@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ville <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={data.ville}
              onChange={(e) => handleChange('ville', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Abidjan"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Pays <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={data.pays}
              onChange={(e) => handleChange('pays', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Côte d'Ivoire"
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Objectif professionnel
          </label>
          <textarea
            value={data.objectif}
            onChange={(e) => handleChange('objectif', e.target.value)}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Décrivez brièvement votre objectif professionnel..."
          />
        </div>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Expériences professionnelles</h2>
          <button
            onClick={addExperience}
            className="flex items-center gap-1 px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm"
          >
            <Plus size={16} /> Ajouter
          </button>
        </div>

        {data.experiences.map((exp) => (
          <div key={exp.id} className="mb-4 p-4 border border-gray-200 rounded-md">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-medium text-gray-700">Expérience</h3>
              <button
                onClick={() => removeExperience(exp.id)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 size={18} />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input
                type="text"
                value={exp.poste}
                onChange={(e) => updateExperience(exp.id, 'poste', e.target.value)}
                placeholder="Poste occupé"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              />
              <input
                type="text"
                value={exp.entreprise}
                onChange={(e) => updateExperience(exp.id, 'entreprise', e.target.value)}
                placeholder="Entreprise"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              />
              <input
                type="text"
                value={exp.ville}
                onChange={(e) => updateExperience(exp.id, 'ville', e.target.value)}
                placeholder="Ville"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              />
              <input
                type="text"
                value={exp.dateDebut}
                onChange={(e) => updateExperience(exp.id, 'dateDebut', e.target.value)}
                placeholder="Date début (ex: Jan 2020)"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              />
              <input
                type="text"
                value={exp.dateFin}
                onChange={(e) => updateExperience(exp.id, 'dateFin', e.target.value)}
                placeholder="Date fin"
                disabled={exp.enCours}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm disabled:bg-gray-100"
              />
              <label className="flex items-center gap-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  checked={exp.enCours}
                  onChange={(e) => updateExperience(exp.id, 'enCours', e.target.checked)}
                  className="rounded"
                />
                En cours
              </label>
            </div>
            <textarea
              value={exp.description}
              onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
              placeholder="Description des missions et réalisations..."
              rows={3}
              className="w-full mt-3 px-3 py-2 border border-gray-300 rounded-md text-sm"
            />
          </div>
        ))}
      </section>

      <section className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Formations</h2>
          <button
            onClick={addFormation}
            className="flex items-center gap-1 px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm"
          >
            <Plus size={16} /> Ajouter
          </button>
        </div>

        {data.formations.map((form) => (
          <div key={form.id} className="mb-4 p-4 border border-gray-200 rounded-md">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-medium text-gray-700">Formation</h3>
              <button
                onClick={() => removeFormation(form.id)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 size={18} />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input
                type="text"
                value={form.diplome}
                onChange={(e) => updateFormation(form.id, 'diplome', e.target.value)}
                placeholder="Diplôme"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              />
              <input
                type="text"
                value={form.etablissement}
                onChange={(e) => updateFormation(form.id, 'etablissement', e.target.value)}
                placeholder="Établissement"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              />
              <input
                type="text"
                value={form.ville}
                onChange={(e) => updateFormation(form.id, 'ville', e.target.value)}
                placeholder="Ville"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              />
              <input
                type="text"
                value={form.dateDebut}
                onChange={(e) => updateFormation(form.id, 'dateDebut', e.target.value)}
                placeholder="Date début (ex: 2018)"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              />
              <input
                type="text"
                value={form.dateFin}
                onChange={(e) => updateFormation(form.id, 'dateFin', e.target.value)}
                placeholder="Date fin"
                disabled={form.enCours}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm disabled:bg-gray-100"
              />
              <label className="flex items-center gap-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  checked={form.enCours}
                  onChange={(e) => updateFormation(form.id, 'enCours', e.target.checked)}
                  className="rounded"
                />
                En cours
              </label>
            </div>
            <textarea
              value={form.description}
              onChange={(e) => updateFormation(form.id, 'description', e.target.value)}
              placeholder="Description (optionnelle)..."
              rows={2}
              className="w-full mt-3 px-3 py-2 border border-gray-300 rounded-md text-sm"
            />
          </div>
        ))}
      </section>

      <section className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Compétences</h2>
          <button
            onClick={addCompetence}
            className="flex items-center gap-1 px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm"
          >
            <Plus size={16} /> Ajouter
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {data.competences.map((comp) => (
            <div key={comp.id} className="flex gap-2 items-center">
              <input
                type="text"
                value={comp.nom}
                onChange={(e) => updateCompetence(comp.id, 'nom', e.target.value)}
                placeholder="Nom de la compétence"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm"
              />
              <select
                value={comp.niveau}
                onChange={(e) => updateCompetence(comp.id, 'niveau', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md text-sm"
              >
                <option>Débutant</option>
                <option>Intermédiaire</option>
                <option>Avancé</option>
                <option>Expert</option>
              </select>
              <button
                onClick={() => removeCompetence(comp.id)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Langues</h2>
          <button
            onClick={addLangue}
            className="flex items-center gap-1 px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm"
          >
            <Plus size={16} /> Ajouter
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {data.langues.map((lang) => (
            <div key={lang.id} className="flex gap-2 items-center">
              <input
                type="text"
                value={lang.nom}
                onChange={(e) => updateLangue(lang.id, 'nom', e.target.value)}
                placeholder="Langue"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm"
              />
              <select
                value={lang.niveau}
                onChange={(e) => updateLangue(lang.id, 'niveau', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md text-sm"
              >
                <option>Débutant</option>
                <option>Intermédiaire</option>
                <option>Avancé</option>
                <option>Courant</option>
                <option>Natif</option>
              </select>
              <button
                onClick={() => removeLangue(lang.id)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Centres d'intérêt</h2>
        <textarea
          value={data.centresInteret.join(', ')}
          onChange={(e) =>
            handleChange(
              'centresInteret',
              e.target.value.split(',').map((s) => s.trim()).filter(Boolean)
            )
          }
          rows={2}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Séparez les centres d'intérêt par des virgules (ex: Sport, Lecture, Voyages)"
        />
      </section>

      <section className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Références (optionnelles)</h2>
          <button
            onClick={addReference}
            className="flex items-center gap-1 px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm"
          >
            <Plus size={16} /> Ajouter
          </button>
        </div>

        {data.references.map((ref) => (
          <div key={ref.id} className="mb-4 p-4 border border-gray-200 rounded-md">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-medium text-gray-700">Référence</h3>
              <button
                onClick={() => removeReference(ref.id)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 size={18} />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input
                type="text"
                value={ref.nom}
                onChange={(e) => updateReference(ref.id, 'nom', e.target.value)}
                placeholder="Nom complet"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              />
              <input
                type="text"
                value={ref.poste}
                onChange={(e) => updateReference(ref.id, 'poste', e.target.value)}
                placeholder="Poste"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              />
              <input
                type="text"
                value={ref.entreprise}
                onChange={(e) => updateReference(ref.id, 'entreprise', e.target.value)}
                placeholder="Entreprise"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              />
              <input
                type="tel"
                value={ref.telephone}
                onChange={(e) => updateReference(ref.id, 'telephone', e.target.value)}
                placeholder="Téléphone"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              />
              <input
                type="email"
                value={ref.email}
                onChange={(e) => updateReference(ref.id, 'email', e.target.value)}
                placeholder="Email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm col-span-1 md:col-span-2"
              />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
