class StringCalculator {
  constructor() {
    this._DEFAULT_DELIMITER = ",";
  }

  add(numbers) {
    const separatedNumbers = this._separate(numbers);
    const integers = this._parseIntegers(separatedNumbers);
    const total = this._sum(integers);
    return total || 0;
  }

  _separate(numberString) {
    const delimited = this._delimit(numberString);
    return delimited
      .replace(/\n/g, this._DEFAULT_DELIMITER)
      .split(this._DEFAULT_DELIMITER);
  }

  _sum(integers) {
    return integers.reduce((total, number) => (total + number));
  }

  _parseIntegers(numberStrings) {
    return numberStrings.map(number => (parseInt(number, 10)));
  }

  _delimit(numberString) {
    const findDelimiter = /^\/\/(.)[\n\r]/;
    const delimiter = numberString.match(findDelimiter) || [];

    return numberString
      .replace(findDelimiter, "")
      .replace(delimiter[1], this._DEFAULT_DELIMITER);
  }
}

module.exports = StringCalculator;