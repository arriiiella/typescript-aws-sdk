import { promises, readSync } from "fs";

const fileName =
  "";

async function myReadFile() {
  const readFileReturns = await promises.readFile(fileName, { encoding: "utf-8" });
  console.log(`readFile returns ${readFileReturns}`);
}

myReadFile();
