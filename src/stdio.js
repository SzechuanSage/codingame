/**
 * Created by hadgi on 10/03/2017.
 */

export default function stdio() {
  let standardInput = [];
  let standardOutput = [];

  function loadInput(input) {
    standardInput = standardInput.concat(input);
  }

  function readline() {
    return standardInput.shift();
  }

  function print(output) {
    standardOutput.push(output)
  }

  function getOutput() {
    return standardOutput.shift();
  }

  return {
    loadInput,
    readline,
    print,
    getOutput,
  }
}