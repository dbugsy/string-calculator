class StringCalculator {

  add(numbers) {
    const integers = this._parseIntegers(numbers);
    const total = this._sum(integers);
    return total || 0;
  }

  _parseIntegers(numbers) {
    return numbers
      .split(",")
      .map(number => (parseInt(number, 10)));
  }

  _sum(integers) {
    return integers.reduce((total, number) => (total + number));
  }

}

module.exports = StringCalculator;