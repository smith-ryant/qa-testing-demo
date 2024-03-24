 const {
    formatTitle, 
    shortenBio, 
    convertLength,
    formatLocation,
    formatTime
} = require('./public/utils')

let testData = {
    id: 1,
    firstName: "Patten",
    lastName: "Goforth",
    bio: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    datetime: "2022-03-14 8:00:00",
    title: "nulla ac",
    length: 65,
    floor: 5,
    roomNumber: 3
  }

  // test('should be 2', () => {
  //   expect(1 + 1).toBe(2);
  // });

  test('fromatTitle should return "Nulla Ac"', () => {
    // expect(formatTitle(testData.title)).toBe("Nulla Ac");
    let expected = "Nulla Ac";
    let actual = formatTitle(testData.title);
    expect(actual).toBe(expected);
  });

  describe('convertLength', () => {
  test('shortenBio should return "About the Speaker: Nulla ut erat id mauris vulputate elementum..."', () => {
    let expected = "About the Speaker: Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi...";
    let actual = shortenBio(testData.bio);
    expect(actual).toBe(expected);
  });
});

  describe('formatting date and time', () => {
    test('formatTime should return "8:00 AM"', () => {
      let expected = "8:00 AM";
      let actual = formatTime(testData.datetime);
      expect(actual).toBe(expected);
    });
  });

  test("format the time of the event", () => {
		let expected = "8:00 AM";

		let actual = formatTime(testData.datetime);

		expect(actual).toBe(expected);
	});