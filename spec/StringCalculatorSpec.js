const StringCalculator = require("../src/StringCalculator");

describe("String Calculato", () => {
  describe("Adding numbers", () => {
    let stringCalculator;

    beforeEach( () => {
      stringCalculator = new StringCalculator();
    }); 

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
  });
});