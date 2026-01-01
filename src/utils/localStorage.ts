import { CVData } from '../types/cv';

const STORAGE_KEY = 'cv_generator_data';

export const saveToLocalStorage = (data: CVData): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Erreur lors de la sauvegarde:', error);
  }
};

export const loadFromLocalStorage = (): CVData | null => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Erreur lors du chargement:', error);
    return null;
  }
};

export const clearLocalStorage = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Erreur lors de la suppression:', error);
  }
};
