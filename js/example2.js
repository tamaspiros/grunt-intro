function AnotherExample() {};

AnotherExample.prototype.methodOne = function(number) {
  console.log("Function argument is set to: " + number);
  var result;
  result = number*number;
  return result;
};

AnotherExample.prototype.methodTwo = function(numberOne, numberTwo) {
  console.log("First argument: " + numberOne);
  console.log("Second argument: " + numberTwo);

  var divide = numberOne / numberTwo;
  return divide;
}

module.exports = AnotherExample;