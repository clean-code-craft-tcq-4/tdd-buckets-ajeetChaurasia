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
  sortedInput.forEach((element, index) => {
    const difference = sortedInput[index + 1] - sortedInput[index];
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

  printRange(ranges);
}

function printRange(ranges) {
  console.log('Range', 'Occurence');
  ranges.forEach(function (obj, index) {
    console.log(obj['min'] + '-' + obj['max'], obj['occurence']);
  });
}

formRange([3, 3, 4, 5, 7, 8, 9]);

module.exports = {
  isNotEmpty,
  isArray,
  formRange,
};
