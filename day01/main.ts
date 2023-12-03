import fs from "fs";

function concatFirstAndLastIntValuesFromString(input: string): number {
  input = input.replace(/[^0-9]/g, "");
  if (input.length == 0) return 0;
  const first = input.charAt(0);
  const last = input.length == 1 ? input.charAt(0) : input.charAt(input.length - 1);    
  return parseInt(first + last);
}

function main() {
  const input = fs.readFileSync("./input.txt", "utf8").split("\n");
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    sum += concatFirstAndLastIntValuesFromString(input[i]);
  }
  console.log("Sum", sum);
}


main();
