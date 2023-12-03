import run from "aocrunner"

const parseInput = (rawInput: string) => rawInput.split("\n");
const parseInput2 = (rawInput: string) => rawInput

function concatFirstAndLastIntValuesFromString(input: string): number {
  input = input.replace(/[^0-9]/g, "");
  if (input.length == 0) return 0;
  const first = input.charAt(0);
  const last = input.length == 1 ? input.charAt(0) : input.charAt(input.length - 1);    
  return parseInt(first + last);
}

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput)
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    sum += concatFirstAndLastIntValuesFromString(input[i]);
  }

  return sum;
}

const part2 = (rawInput: string) => {
  let input = parseInput2(rawInput)

  while (true) {
    const matching = input.match(
      /one|two|three|four|five|six|seven|eight|nine/,
    );

    if (matching === null) {
      break;
    }

    const number = matching[0];
    let newstr = "";
    switch (number) {
      case "one":
        newstr = "on1e";
        break;
      case "two":
        newstr = "t2wo";
        break;
      case "three":
        newstr = "thr3ee";
        break;
      case "four":
        newstr = "fou4r";
        break;
      case "five":
        newstr = "fiv5e";
        break;
      case "six":
        newstr = "si6x";
        break;
      case "seven":
        newstr = "sev7en";
        break;
      case "eight":
        newstr = "eig8ht";
        break;
      case "nine":
        newstr = "ni9ne";
        break;
    }
    input = input.replace(number as unknown as string, newstr);
  }

  const lines = input.split("\n");

  let totalValue = 0;
  lines.forEach((line) => {
    const characters = line.split("");
    const numbers = characters.filter((c) => {
      const number = parseInt(c);
      if (!isNaN(number)) {
        return true;
      }
    });
    const combined = numbers[0] + numbers[numbers.length - 1];
    totalValue += parseInt(combined);
  });

  return totalValue;
}

run({
  part1: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
})
