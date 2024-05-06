const fs = require('fs');

function removeDuplicatesFromFile(inputFile, outputFile) {
  fs.readFile(inputFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Ошибка чтения файла:', err);
      return;
    }
    const lines = data.split('\n');

    const uniqueLines = {};

    lines.forEach((line) => {
      const columns = line.split(',');
      const content = columns.slice(1).join(',').trim().toLowerCase();
      uniqueLines[content] = line;
    });

    const uniqueLinesArray = Object.values(uniqueLines);

    const outputData = uniqueLinesArray.join('\n');

    fs.writeFile(outputFile, outputData, 'utf8', (err) => {
      if (err) {
        console.error('Ошибка записи файла:', err);
        return;
      }
      console.log('Клонированные строки удалены успешно.');
    });
  });
}
// Использование функции
const inputFile = 'twitter_data.csv';
const outputFile = 'twitter_data(no_clone).csv';
removeDuplicatesFromFile(inputFile, outputFile);
