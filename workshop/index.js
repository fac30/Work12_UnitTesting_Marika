// "pikachu" -> "https://pokeapi.co/api/v2/pikachu"

function makeUrl(name) {
  return "https://pokeapi.co/api/v2/" + name;
}

function searchParamsToObject(queryString = "name=oliver&email=hello@oliverjam.es") {
  const params = new URLSearchParams(queryString);
  return Object.fromEntries(params);
}

function isLeapYear(year) {
  if (typeof year !== "number" || year < 0 || !Number.isInteger(year)) {
      return "Invalid input: year must be a positive integer.";
  }

  if (year % 400 === 0) {
      return true;
  }
  if (year % 100 === 0) {
      return false;
  }
  if (year % 4 === 0) {
      return true;
  }
  return false;
}

