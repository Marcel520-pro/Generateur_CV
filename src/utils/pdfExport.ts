import html2pdf from 'html2pdf.js';

export const exportToPDF = (elementId: string, filename: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const element = document.getElementById(elementId);
    if (!element) {
      reject(new Error('Element not found'));
      return;
    }

    const opt = {
      margin: 0,
      filename: `${filename}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        logging: false
      },
      jsPDF: {
        unit: 'mm',
        format: 'a4',
        orientation: 'portrait'
      }
    };

    html2pdf()
      .set(opt)
      .from(element)
      .save()
      .then(() => resolve())
      .catch((error: Error) => reject(error));
  });
};
