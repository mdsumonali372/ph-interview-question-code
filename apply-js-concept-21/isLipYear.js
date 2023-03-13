function isLeapYear(year) {
  const remainder = year % 4;
  if (remainder === 0) {
    return true;
  } else {
    return false;
  }
}

function isLeapYear(year) {
  const remainder = year % 4;
  if (remainder === 0) {
    return true;
  }
  return false;
}

const isMyYearLeapYear = isLeapYear(2023);
console.log("my year:", isMyYearLeapYear);
