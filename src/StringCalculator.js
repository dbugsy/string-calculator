class StringCalculator {

  add(numbers) {
    const separatedNumbers = this._separate(numbers);
    const integers = this._parseIntegers(separatedNumbers);
    const total = this._sum(integers);
    return total || 0;
  }

  _separate(numberString) {
    return numberString
      .replace(/\n/g, ",")
      .split(",");
  }

  _sum(integers) {
    return integers.reduce((total, number) => (total + number));
  }

  _parseIntegers(numberStrings) {
    return numberStrings.map(number => (parseInt(number, 10)));
  }
}

module.exports = StringCalculator;