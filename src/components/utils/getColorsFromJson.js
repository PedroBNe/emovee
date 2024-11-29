const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

function getColorsFromJson() {
  async function fetchAndWriteColorsJson() {
    const url = 'https://imagensladingpage.s3.sa-east-1.amazonaws.com/data/colors.json'; // URL do arquivo JSON remoto
    const filePath = path.join(__dirname, 'site-colors', 'colors.json'); // Caminho onde o arquivo será salvo

    try {
      // Verifica se a pasta 'colors' existe, caso contrário, cria
      const publicDir = path.join(__dirname, 'site-colors');
      if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
      }

      // Realiza a requisição GET para buscar o arquivo remoto
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Erro ao buscar o arquivo: ${response.statusText}`);
      }

      const data = await response.json(); // Converte a resposta para JSON

      // Verifica se o arquivo já existe e, se sim, sobrescreve
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2)); // Escreve o conteúdo no arquivo 'colors.json'
      console.log('Arquivo colors.json atualizado com sucesso!');
    } catch (error) {
      console.error('Erro ao buscar ou escrever o arquivo:', error);
    }
  }

  // Função para buscar e escrever o arquivo 'colors.json'
  try {
    fetchAndWriteColorsJson();
    // Caminho relativo ao arquivo JSON
    const colorsPath = path.resolve(__dirname, 'site-colors', 'colors.json');
    const colorsData = JSON.parse(fs.readFileSync(colorsPath, 'utf-8'));

    // Certifique-se de que colorsData é um array
    if (!Array.isArray(colorsData)) {
      throw new Error('O JSON esperado deve ser um array.');
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
