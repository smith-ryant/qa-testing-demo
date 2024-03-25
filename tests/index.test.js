// Importing the necessary functions from the "../public/utils" module
const {
  formatTitle,
  shortenBio,
  convertLength,
  formatLocation,
  formatTime,
  formatDate,
  formatLength,
} = require("../public/utils");

// Test data object
let testData = {
  id: 1,
  firstName: "Patten",
  lastName: "Goforth",
  bio: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
  datetime: "2022-03-14 8:00:00",
  title: "nulla ac",
  length: 65,
  floor: 5,
  roomNumber: 3,
};

// Test case for formatTitle function
test('formatTitle should return "Nulla Ac"', () => {
  let expected = "Nulla Ac";
  let actual = formatTitle(testData.title);
  expect(actual).toBe(expected);
});

// Test suite for shortenBio function
describe("shortenBio", () => {
  test('shortenBio should return "About the Speaker: Nulla ut erat id mauris vulputate elementum..."', () => {
    let expected =
      "About the Speaker: Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi...";
    let actual = shortenBio(testData.bio);
    expect(actual).toBe(expected);
  });
});

// Test suite for convertLength function
describe("convertLength", () => {
  test("convertLength should return [1, 5] for 65", () => {
    let expected = [1, 5];
    let actual = convertLength(testData.length);
    expect(actual).toEqual(expected);
  });
});

// Test suite for formatLocation function
describe("formatLocation", () => {
  test('formatLocation should return "Floor: 5 | Room: 3"', () => {
    let expected = "Floor: 5 | Room: 3";
    let actual = formatLocation(testData.floor, testData.roomNumber);
    expect(actual).toBe(expected);
  });
});

// Test suite for formatDate function
describe("formatDate", () => {
  test('formatDate should return "March 14, 2022"', () => {
    let expected = "March 14, 2022";
    let actual = formatDate(testData.datetime);
    expect(actual).toBe(expected);
  });
});

// Test suite for formatLength function
describe("formatLength", () => {
  test('formatLength should return "Length: 1 hour and 5 minutes"', () => {
    let length = convertLength(testData.length);
    let expected = "Length: 1 hour and 5 minutes";
    let actual = formatLength(length);
    expect(actual).toBe(expected);
  });
});

// Test suite for formatTime function
describe("formatTime", () => {
  test('formatTime should return "8:00 AM"', () => {
    let expected = "8:00 AM";
    let actual = formatTime(testData.datetime);
    expect(actual).toBe(expected);
  });
});

// Test case for formatTime function
test("format the time of the event", () => {
  let expected = "8:00 AM";
  let actual = formatTime(testData.datetime);
  expect(actual).toBe(expected);
});
