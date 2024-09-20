test("Creates correct URL for Pikachu", () => {
    const result = makeUrl("pikachu");
    equal(result, "https://pokeapi.co/api/v2/pikachu", "makeUrl('pikachu') should return the correct URL");
});

test("Creates correct URL for Bulbasaur", () => {
    const result = makeUrl("bulbasaur");
    equal(result, "https://pokeapi.co/api/v2/bulbasaur", "makeUrl('bulbasaur') should return the correct URL");
});



test("Converts 'name=oliver&email=hello@oliverjam.es' to object", () => {
    const queryString = "name=oliver&email=hello@oliverjam.es";
    const expected = { name: "oliver", email: "hello@oliverjam.es" };
    const result = searchParamsToObject(queryString);
    equal(result.name, expected.name, "The name should be Oliver");
    equal(result.email, expected.email, "the email should be 'hello@oliverjam.es'");
});


test("Year 1900 is not a leap year", () => {
    const result = isLeapYear(1900);
    equal(result, false, "1900 should not be a leap year");
});

test("Year 2020 is a leap year", () => {
    const result = isLeapYear(2020);
    equal(result, true, "2020 should be a leap year");
});

test("Year 2000 is a leap year", () => {
    const result = isLeapYear(2000);
    equal(result, true, "2000 should be a leap year");
});

test("Year 2019 is not a leap year", () => {
    const result = isLeapYear(2019);
    equal(result, false, "2019 should not be a leap year");
});

test("Passing a string 'hello' returns an error", () => {
    const result = isLeapYear("hello");
    equal(result, "Invalid input: year must be a positive integer.", "Passing a string should return an error message");
});

test("Passing a negative year -2020 returns an error", () => {
    const result = isLeapYear(-2020);
    equal(result, "Invalid input: year must be a positive integer.", "Negative year should return an error message");
});

test("Passing a decimal year 2020.5 returns an error", () => {
    const result = isLeapYear(2020.5);
    equal(result, "Invalid input: year must be a positive integer.", "Decimal year should return an error message");
});