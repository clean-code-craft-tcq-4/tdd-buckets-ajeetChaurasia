function isNotEmpty(data) {
  if (data.length > 0) {
    return true;
  }
  return false;
}

function isArray(data) {
  if (Array.isArray(data)) {
    return true;
  }
  return false;
}

function formRange(data) {
  if (!isNotEmpty(data)) {
    return 'Input is empty';
  }

  if (!isArray(data)) {
    return 'Non Array Data';
  }

  let sortedInput = Object.keys(data);
  let startAt = 0;
  let endsAt;
  let occurence = 1;
  let ranges = [];

  if (sortedInput.length > 1) {
    sortedInput.forEach((element, index) => {
      const difference = getDifference(
        sortedInput[index + 1],
        sortedInput[index]
      );
      if ([0, 1].includes(difference)) {
        endsAt = index + 1;
        occurence++;
      } else {
        if (occurence > 1) {
          ranges.push({
            min: sortedInput[startAt],
            max: sortedInput[endsAt],
            occurence,
          });
          endsAt = undefined;
          occurence = 1;
        }
        startAt = index + 1;
      }
    });
  } else {
    ranges = [
      {
        min: data[0],
        max: data[0],
        occurence: 1,
      },
    ];
  }

  return ranges;
}

function printRange(ranges) {
  console.log('Range', 'Occurence');
  ranges.forEach(function (obj, index) {
    console.log(obj['min'] + '-' + obj['max'], obj['occurence']);
  });
}

function getDifference(number1, number2) {
  if (number1 !== undefined || number2 != undefined) {
    return number1 - number2;
  }
}

printRange(formRange([3]));

module.exports = {
  isNotEmpty,
  isArray,
  formRange,
  getDifference,
};
