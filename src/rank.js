function isContainZone(zone) {
  return [
    'china',
    'east-indies',
  ].includes(zone)
}

function getMaxWithResult(result) {
  return Math.max(result, 0);
}

function voyageRisk(voyage) {
  let result = 1;
  if (voyage.length > 4) {
    result += 2;
  }
  if (voyage.length > 8) {
    result += voyage.length - 8;
  }
  if (isContainZone(voyage.zone)) {
    result += 4;
  }
  return getMaxWithResult(result);
}

function hasChina(history) {
  return history.some(v => 'china' === v.zone);
}

function getFilterHistoryLength(history) {
  return history.filter(v => v.profit < 0).length;
}

function captainHistoryRisk(voyage, history) {
  let result = 1;
  if (history.length < 5) {
    result += 4;
  }
  result += getFilterHistoryLength(history);
  if (voyage.zone === 'china' && hasChina(history)) {
    result -= 2;
  }
  return getMaxWithResult(result);
}

function handleResultWithZoneEqualChina(result, history, voyage) {
  result += 3;
  if (history.length > 10) {
    result += 1;
  }
  if (voyage.length > 12) {
    result += 1;
  }
  if (voyage.length > 18) {
    result -= 1;
  }
  return result;
}

function handleResultWithZoneNotEqualChina(result, history, voyage) {
  if (history.length > 8) {
    result += 1;
  }
  if (voyage.length > 14) {
    result -= 1;
  }
  return result;
}

function handleResultWithZone(result, history, voyage) {
  if (voyage.zone === 'china' && hasChina(history)) {
    result = handleResultWithZoneEqualChina(result, history, voyage);
  } else {
    result = handleResultWithZoneNotEqualChina(result, history, voyage)
  }
  return result;
}

function voyageProfitFactor(voyage, history) {
  let result = 2;
  if (voyage.zone === 'china' || voyage.zone === 'east-indies') {
    result += 1;
  }
  return handleResultWithZone(result, history, voyage);
}

function rating(voyage, history) {
  return voyageProfitFactor(voyage, history) * 3
    > (voyageRisk(voyage) + captainHistoryRisk(voyage, history) * 2)
    ? 'A' : 'B';
}

module.exports = {
  voyageRisk,
  voyageProfitFactor
};

const voyage = {
  zone: 'west-indies',
  length: 10,
};
const history = [
  {
    zone: 'east-indies',
    profit: 5,
  }, {
    zone: 'west-indies',
    profit: 15,
  }, {
    zone: 'china',
    profit: -2,
  },
  {
    zone: 'west-africa',
    profit: 7,
  },
];
const myRating = rating(voyage, history);
console.log(`myRating: ${myRating}`);
