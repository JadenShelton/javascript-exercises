const add = function(a, b) {
  if(isNum(a) && isNum(b)) {
    return a + b;
  } else {
    return "Error must be two numbers!";
  }
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  let sum = 0;
	arr.forEach(element => {
    sum += element;
  });
  return sum;
};

const multiply = function(arr) {
  let product = 1;
	arr.forEach(element => {
    product *= element;
  });
  return product;
};

const power = function(base, exponent) {
  let total = 1;
	for(i = 0; i < exponent; ++i) {
    total *= base;
  }
  return total;
};

const factorial = function(num) {
	let total = num;
  if(total === 0) {
    return 1;
  }
  for(i = num - 1; i > 0; --i) {
    total *= i;
  }
  return total;
};

function isNum (value) {
  return typeof value === 'number' && !Number.isNaN(value);
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
