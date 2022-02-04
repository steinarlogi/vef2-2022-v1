export function parseData(data) {
  const dataList = data.split('\n');
  const numberList = [];

  for (const line of dataList) {
    const sentence = line.trim();

    if (sentence[0] !== '#') {
      const splitString = sentence.split('.');
      const noThousandSeperator = splitString.join('');
      const cleanString = noThousandSeperator.replace(',', '.');

      if (!(Number.isNaN(parseFloat(cleanString)) || cleanString === '')) {
        numberList.push(parseFloat(cleanString));
      }
    }
  }

  return numberList;
}
