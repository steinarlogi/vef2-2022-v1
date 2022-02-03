export function parseData(data) {
  const dataList = data.split('\n');
  const numberList = [];

  for (const line of dataList) {
    const sentence = line.trim();

    if (sentence[0] !== '#') {
      const splitString = sentence.split('.');
      const noThousandSeperator = splitString.join('');
      const cleanString = noThousandSeperator.replace(',', '.');

      if (!(Number.isNaN(cleanString) || cleanString === '')) {
        numberList.push(parseFloat(cleanString));
      }
    }
  }

  // start by sorting list.
  numberList.sort((a, b) => a - b);

  if (numberList.length === 0) {
    // status: 0, þýðir að skráin er tóm
    return {
      status: 0,
    };
  }

  const maxValue = numberList[numberList.length - 1];
  const minValue = numberList[0];
  let sum = 0;

  for (const number of numberList) {
    sum += number;
  }

  const mean = sum / numberList.length;

  let median = 0;
  if (numberList.length % 2 === 1) {
    median = numberList[Math.floor(numberList.length / 2)];
  } else {
    median = (numberList[numberList.length / 2] + numberList[numberList.length / 2 - 1]) / 2;
  }

  let variance = 0;

  for (const number of numberList) {
    variance += (number - mean) ** 2;
  }

  if (numberList.length > 1) {
    variance /= (numberList.length - 1);
  }

  const stddev = Math.sqrt(variance);

  return {
    status: 1,
    max: maxValue,
    min: minValue,
    sum,
    variance,
    mean,
    median,
    standardDeviation: stddev,
  };
}
