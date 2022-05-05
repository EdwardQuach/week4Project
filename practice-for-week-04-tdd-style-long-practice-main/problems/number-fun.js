function returnsThree() {
  return 3;
}

function reciprocal(n) {
  if (n < 1 || n > 1000000) {
    throw new Error("TypeError the input arguement must be within the range of 1 - 1000000")
  }

  return 1/n;
}

module.exports = {
  returnsThree,
  reciprocal
};
