export function parseData(data) {
  const dataList = data.split("\n");
  const numberList = [];

  for(const line of dataList) {
    const sentence = line.trim();

    if(sentence[0] == '#') {
      continue;
    }

    const splitString = sentence.split(".");
    const noThousandSeperator = splitString.join('');
    const cleanString = noThousandSeperator.replace(',', '.');

    if(isNaN(cleanString) || cleanString === '') {
      continue;
    }

    //Clean String Should be a valid floating point number
    //Scientific notation e.g. 10e23 is valid.

    numberList.push(parseFloat(cleanString));
  }

  //start by sorting list.
  numberList.sort(function(a, b) {return a-b;});

  if(numberList.length == 0) {
    //status: 0, þýðir að skráin er tóm
    return {
      status: 0
    };
  }

  const maxValue = numberList[numberList.length-1];
  const minValue = numberList[0];
  let sum = 0;

  for(const number of numberList) {
      sum = sum + number;
  }

  const mean = sum/numberList.length;

  let median = 0;
  if(numberList.length % 2 == 1) {
    median = numberList[Math.floor(numberList.length/2)];
  } else {
    median = (numberList[numberList.length/2] + numberList[numberList.length/2-1])/2;
  }

  let variance = 0;

  for(const number of numberList) {
    variance = variance + Math.pow(number - mean, 2);
  }

  const stddev = Math.sqrt(variance);

  return {
    status: 1,
    max: maxValue,
    min: minValue,
    sum: sum,
    variance: variance,
    mean: mean,
    median: median,
    standardDeviation: stddev
  };
}
