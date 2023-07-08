// Variable Declarations
const num1 = 31;
const num2 = 2;
const num3 = 20;
const num4 = 8;
const numbers = [10, 5, 20, 3];

// Multiply variable
const multiply = num1 * num2;

// Random variable
const random = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) + 1;

// Mod variable
const mod = num3 % num4;

// Max variable
const max = Math.max(...numbers);

// Export the variables
module.exports = {
  multiply,
  random,
  mod,
  max,
};
