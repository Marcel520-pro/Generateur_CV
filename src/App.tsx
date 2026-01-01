import { useState, useEffect } from 'react';
import { Download, FileText, Trash2, Save } from 'lucide-react';
import CVForm from './components/CVForm';
import CVPreview from './components/CVPreview';
import { CVData, TemplateType } from './types/cv';
import { getInitialCVData } from './utils/initialData';
import { saveToLocalStorage, loadFromLocalStorage, clearLocalStorage } from './utils/localStorage';
import { exportToPDF } from './utils/pdfExport';

function App() {
  const [cvData, setCvData] = useState<CVData>(getInitialCVData());
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateType>('classique');
  const [isExporting, setIsExporting] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [notification, setNotification] = useState('');

  useEffect(() => {
    const savedData = loadFromLocalStorage();
    if (savedData) {
      setCvData(savedData);
      showNotification('Données chargées depuis la sauvegarde');
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cvData.prenom || cvData.nom) {
        saveToLocalStorage(cvData);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [cvData]);

  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(''), 3000);
  };

  const handleExportPDF = async () => {
    if (!cvData.prenom || !cvData.nom || !cvData.telephone) {
      showNotification('Veuillez remplir au minimum le nom, prénom et téléphone');
      return;
    }

    setIsExporting(true);
    try {
      const filename = `CV_${cvData.prenom}_${cvData.nom}`;
      await exportToPDF('cv-preview', filename);
      showNotification('CV téléchargé avec succès');
    } catch (error) {
      console.error('Erreur lors de l\'export PDF:', error);
      showNotification('Erreur lors de l\'export PDF');
    } finally {
      setIsExporting(false);
    }
  };

  const handleSaveData = () => {
    saveToLocalStorage(cvData);
    showNotification('Données sauvegardées');
  };

  const handleClearData = () => {
    if (confirm('Êtes-vous sûr de vouloir effacer toutes les données ?')) {
      clearLocalStorage();
      setCvData(getInitialCVData());
      showNotification('Données effacées');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-3">
              <FileText className="text-blue-600" size={32} />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Générateur de CV</h1>
                <p className="text-sm text-gray-600">Créez votre CV professionnel gratuitement</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={handleSaveData}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-sm font-medium"
              >
                <Save size={18} />
                Sauvegarder
              </button>
              <button
                onClick={handleClearData}
                className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition text-sm font-medium"
              >
                <Trash2 size={18} />
                Effacer tout
              </button>
              <button
                onClick={handleExportPDF}
                disabled={isExporting}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-medium disabled:opacity-50"
              >
                <Download size={18} />
                {isExporting ? 'Génération...' : 'Télécharger PDF'}
              </button>
            </div>
          </div>
        </div>
      </header>

      {notification && (
        <div className="fixed top-20 right-4 bg-gray-900 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in">
          {notification}
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-1">Choisissez un modèle</h2>
              <p className="text-sm text-gray-600">Sélectionnez le style qui vous convient</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setSelectedTemplate('classique')}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  selectedTemplate === 'classique'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Classique
              </button>
              <button
                onClick={() => setSelectedTemplate('moderne')}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  selectedTemplate === 'moderne'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Moderne
              </button>
              <button
                onClick={() => setSelectedTemplate('minimal')}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  selectedTemplate === 'minimal'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Minimal
              </button>
            </div>
            <button
              onClick={() => setShowPreview(!showPreview)}
              className="md:hidden px-4 py-2 bg-gray-900 text-white rounded-lg font-medium"
            >
              {showPreview ? 'Voir formulaire' : 'Voir aperçu'}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className={`${showPreview ? 'hidden md:block' : 'block'}`}>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Vos informations</h2>
              <CVForm data={cvData} onChange={setCvData} />
            </div>
          </div>

          <div className={`${!showPreview ? 'hidden md:block' : 'block'}`}>
            <div className="sticky top-24">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Aperçu en direct</h2>
              <CVPreview data={cvData} template={selectedTemplate} />
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-gray-600">
            Générateur de CV 100% gratuit - Aucune inscription requise - Vos données restent sur votre appareil
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
