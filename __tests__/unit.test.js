// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// isPhoneNumber 4 tests
// isPhoneNumber first truth test
test('checks to see if a number is in ###-###-#### valid form', () => {
    expect(functions.isPhoneNumber('760-996-4461')).toBe(true);
});
// isPhoneNumber second truth test
test('checks to see if a number is in (###) ###-#### or ######-#### valid form', () => {
    expect(functions.isPhoneNumber('(760) 996-4461')).toBe(true);
});
// isPhoneNumber first false test
test('checks to see if a number is not in the specified valid forms', () => {
    expect(functions.isPhoneNumber('7609964461')).toBe(false);
});
// isPhoneNumber second false test
test('checks to see if an empty phone number is valid', () => {
    expect(functions.isPhoneNumber('')).toBe(false);
});

// isEmail 4 unit tests
// isEmail first truth test
test('checks to see if an email is in name@url.com valid form', () => {
    expect(functions.isEmail('agarias@ucsd.edu')).toBe(true);
});
// isEmail second truth test
test('checks to see if an email is in name # @url.co valid form', () => {
    expect(functions.isEmail('agarias2462@ucsd.ed')).toBe(true);
});
// isEmail first false test
test('checks to see if an email is in name.name@url.c invalid form', () => {
    expect(functions.isEmail('agarias2462isthebest@ucsd.e')).toBe(false);
});
// isEmail second false test
test('checks to see if an email is in name.nameurl.com invalid form', () => {
    expect(functions.isEmail('agarias.ucsd.edu')).toBe(false);
});

// The password's first character must be a letter, it must
// contain at least * 4 characters and no more than 15
// characters and no characters other than * * letters, numbers
// and the underscore may be used

// isStrongPassword 4 unit tests
// isStrongPassword first truth test
test('checks to see if a password is within 3 to 15', () => {
    expect(functions.isStrongPassword('Ihatecse')).toBe(true);
});
// isStrongPassword scond truth test
test('checks to see if a password is meets the constraints', () => {
    expect(functions.isStrongPassword('La_9278take')).toBe(true);
});
// isStrongPassword first false test
test('checks to see if a passwords first character is a letter', () => {
    expect(functions.isStrongPassword('9Ilivetolive')).toBe(false);
});
// isStrongPassword second false test
test('checks to see if a password exceeds 15 characters', () => {
    expect(functions.isStrongPassword('ahskdjflakjdakdhfahjfhjdskh')).toBe(false);
});

// 	This regular expressions matches dates of the form XX / XX / YYYY where
// XX can be 1 or 2 digits long and YYYY is always 4 digits long.

// isDate 4 unit tests
// isDate first truth test
test('checks to see if a date matches matches dates of the form XX / XX / YYYY exactly', () => {
    expect(functions.isDate('03/15/1995')).toBe(true);
});
// isDate second truth test
test('checks to see if a date matches matches dates of the form X / X / YYYY exactly', () => {
    expect(functions.isDate('3/5/1995')).toBe(true);
});
// isDate first false test
test('checks to see if a date matches violates the form X / X / YYYY with a two digit year', () => {
    expect(functions.isDate('3/5/95')).toBe(false);
});
// isDate second false test
test('checks to see if an empty date is invalid', () => {
    expect(functions.isDate('')).toBe(false);
});

// Matches valid 3 or 6 character hex codes used for HTML or CSS.
// isHexColor 4 unit tests
// isHexColor first truth test
test('checks to see if hex code of three is valid', () => {
    expect(functions.isHexColor('#fc9')).toBe(true);
});
// isHexColor second truth test
test('checks to see if hex code of six is valid', () => {
    expect(functions.isHexColor('#ffcc99')).toBe(true);
});
// isHexColor first false test
test('checks to see if hex code of two is invalid', () => {
    expect(functions.isHexColor('#ff')).toBe(false);
});
// isHexColor second false test
test('checks to see if hex code of 7 is invalid', () => {
    expect(functions.isHexColor('#ffcc991')).toBe(false);
});