const StringCalculator = require("../src/StringCalculator");

describe("String Calculato", () => {
  let stringCalculator;

  beforeEach( () => {
    stringCalculator = new StringCalculator();
  }); 

  describe("Adding numbers", () => {

    it("empty string adds up to 0", () => {
      const expectedResponse = 0;
      expect(stringCalculator.add("")).toEqual(expectedResponse);
    });

    it("'0' returns 0", () => {
      const expectedResponse = 0;
      expect(stringCalculator.add("0")).toEqual(expectedResponse);
    });

    it("'1' returns 1", () => {
      const expectedResponse = 1;
      expect(stringCalculator.add("1")).toEqual(expectedResponse);
    });

    it("'1,1' returns 2", () => {
      const expectedResponse = 2;
      expect(stringCalculator.add("1,1")).toEqual(expectedResponse);
    });

    it("'1,0' returns 1", () => {
      const expectedResponse = 1;
      expect(stringCalculator.add("1,0")).toEqual(expectedResponse);
    });

    it("'1,1,1' returns 3", () => {
      const expectedResponse = 3;
      expect(stringCalculator.add("1,1,1")).toEqual(expectedResponse);
    });

    it("'1\n1,1' returns 3", () => {
      const expectedResponse = 3;
      expect(stringCalculator.add("1\n1,1")).toEqual(expectedResponse);
    });
  });

  describe("setting a custom delimiter", () => {
    it("can use semi colon to separate numbers", () => {
      const expectedResponse = 3;
      const delimitedString = "//;\n1;1,1";
      expect(stringCalculator.add(delimitedString)).toEqual(expectedResponse);
    });

  });
});