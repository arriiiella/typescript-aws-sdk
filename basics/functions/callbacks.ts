// callback is - a function passed as a parameter into another function.
// By convention, callback functions accept an error as the first parameter (which will be undefined if nothing went wrong) 
// and the result of the function as the second parameter.
import { read, readFile, readFileSync } from "fs";

const fileName =
  "";

const callback = (err: any, data: any) => {
  console.log("-- Callback --");
  console.log(data);
};

const readFileSyncReturns = readFile(fileName, { encoding: "utf-8" }, callback);

console.log(`readFileSync returns:\n${readFileSyncReturns}`);
console.log("Continuing processing....");

const syncJsonData: any = readFileSync(fileName, "utf-8");
console.log(syncJsonData);
