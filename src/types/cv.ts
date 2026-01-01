export interface Experience {
  id: string;
  poste: string;
  entreprise: string;
  ville: string;
  dateDebut: string;
  dateFin: string;
  enCours: boolean;
  description: string;
}

export interface Formation {
  id: string;
  diplome: string;
  etablissement: string;
  ville: string;
  dateDebut: string;
  dateFin: string;
  enCours: boolean;
  description: string;
}

export interface Competence {
  id: string;
  nom: string;
  niveau: 'Débutant' | 'Intermédiaire' | 'Avancé' | 'Expert';
}

export interface Langue {
  id: string;
  nom: string;
  niveau: 'Débutant' | 'Intermédiaire' | 'Avancé' | 'Courant' | 'Natif';
}

export interface Reference {
  id: string;
  nom: string;
  poste: string;
  entreprise: string;
  telephone: string;
  email: string;
}

export interface CVData {
  prenom: string;
  nom: string;
  telephone: string;
  email: string;
  ville: string;
  pays: string;
  objectif: string;
  experiences: Experience[];
  formations: Formation[];
  competences: Competence[];
  langues: Langue[];
  centresInteret: string[];
  references: Reference[];
  avecPhoto: boolean;
  photoUrl: string;
}

export type TemplateType = 'classique' | 'moderne' | 'minimal';
