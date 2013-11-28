function Example() {};

Example.prototype.methodOne = function(number) {
  console.log("Function argument is set to: " + number);
  var result;
  if (number === 0) {
    result = "Zero."
  } else {
    result = "Not zero.";
  }
  return result;
};

Example.prototype.methodTwo = function(numberOne, numberTwo) {
  console.log("First argument: " + numberOne);
  console.log("Second argument: " + numberTwo);

  var add = numberOne + numberTwo;
  return add;
}

module.exports = Example;