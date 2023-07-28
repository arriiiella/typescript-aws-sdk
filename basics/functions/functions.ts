function helloWorld(): string {
  return "Hello, World!";
}

function saySomething(text: string) {
  console.log(text);
}

function introduce(name: string, age: number) {
  console.log(`${name} is ${age} years old`);
}

const add = (x: number, y: number): number => {
  return x + y;
};

let greeting = helloWorld();
console.log(greeting);

saySomething("Good Morning!");

introduce("Ariella", 24);

console.log(add(4, 6));
