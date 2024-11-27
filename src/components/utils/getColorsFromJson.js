const fs = require('fs');
const path = require('path');

function getColorsFromJson() {
  try {
    // Caminho relativo ao arquivo JSON
    const colorsPath = path.resolve(__dirname, '../../data/colors.json');
    const colorsData = JSON.parse(fs.readFileSync(colorsPath, 'utf-8'));

    // Certifique-se de que colorsData é um array
    if (!Array.isArray(colorsData)) {
      throw new Error("O JSON esperado deve ser um array.");
    }

    const colors = {};
    colorsData.forEach((color) => {
      colors[color.name] = {
        DEFAULT: color.default,
        text: color.text || color.default,
      };
    });

    console.log('Cores carregadas:', colors);

    return colors;
  } catch (error) {
    console.error('Erro ao carregar as cores:', error.message);
    return {}; // Retorna um objeto vazio em caso de erro
  }
}

module.exports = getColorsFromJson;
