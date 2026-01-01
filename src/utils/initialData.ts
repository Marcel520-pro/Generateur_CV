import { CVData } from '../types/cv';

export const getInitialCVData = (): CVData => ({
  prenom: '',
  nom: '',
  telephone: '',
  email: '',
  ville: '',
  pays: '',
  objectif: '',
  experiences: [],
  formations: [],
  competences: [],
  langues: [],
  centresInteret: [],
  references: [],
  avecPhoto: false,
  photoUrl: '',
});
