// A Promise is nothing more than an object that represents ("promises") the eventual completion of an asynchronous task
import { promises, read } from "fs";

const fileName =
  "/Users/ariella.faber/Documents/Spikes/typescript-aws-cdk/source/basics/functions/files/notes_functions.txt";

const readFileReturns = promises.readFile(fileName, { encoding: "utf-8" });
console.log(`readFile returns ${readFileReturns}`);
console.log("Continuing processing...");

readFileReturns
  .then((data) => {
    console.log("First .then()....");
    console.log(data);
    return promises.readFile(data.split("\n")[0], { encoding: "utf8" });
  })
  .then((data) => {
    console.log("Second .then()....");
    console.log(data);
  })
  .catch((err) => {
    console.log("Caught an error");
    console.log(err);
  })
  .finally(() => {
    console.log("This happens after completion of the promise, regardless of success or error");
  });
