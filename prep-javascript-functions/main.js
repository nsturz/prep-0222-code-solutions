function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var product = convertHoursToMinutes(2);
console.log('convertHoursToMinutes exercise:', product);

function getGreeting(name) {
  return 'hello ' + name;
}

var myGreeting = getGreeting('Nick');
console.log('getGreetingExercise:', myGreeting);

function addAndMultiplyBy5(num1, num2) {
  return 5 * (num1 + num2);
}

var addAndMultiplyAnswer = addAndMultiplyBy5(10, 10);
console.log('addAndMultiplyBy5 exercise:', addAndMultiplyAnswer);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var multiplyAndDivideAnswer = multiplyAndDivideBy5(100, 100);
console.log('multiplyAndDivideBy5 exercise:', multiplyAndDivideAnswer);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var subtractTwoNumbersAnswer = subtractTwoNumbers(69, 3);
console.log('execute order:', subtractTwoNumbersAnswer);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

var circleCircumference = getCircleCircumference(5);
console.log('getCircleCircumference exercise:', circleCircumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullName = getFullName('General', 'Kenobi');
console.log('getFullName exercise:', fullName);

function cube(number) {
  return number * number * number;
}
var cubeAnswer = cube(5);
console.log('cube exercise:', cubeAnswer);
