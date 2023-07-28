
let numbers: Array<number> = [1, 2, 3, 4, 5];
// append to end of array
numbers.push(6);
// add to beginning of array
numbers.unshift(0);
// remove last element
let lastElement = numbers.pop();
// remove first element
let firstElement = numbers.shift();
// splice(start index, number of elements to be removed, [array of elements to be added])
let removed = numbers.splice(0, 2, 7, 8, 9);

console.log("first number of array: ", numbers[0]);
console.log("last number of array: ", lastElement);
console.log("remove first number: ", firstElement);
console.log("numbers:", numbers);
console.log("sorted: ", numbers.sort());