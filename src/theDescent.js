/**
 * Created by hadgi on 10/03/2017.
 */

import stdio from './stdio';

export default function theDescent() {
  const stdIO = stdio();

  const readline = stdIO.readline;
  const print = stdIO.print;

  const play = function () {
    let target = -1;
    let maxHeight = -1;
    for (let i = 0; i < 8; i++) {
      var mountainH = parseInt(readline()); // represents the height of one mountain.
      if (mountainH >= maxHeight) {
        target = i;
        maxHeight = mountainH;
      }
    }
    print(target); // The index of the mountain to fire on.
    return Promise.resolve();
  };

  return {
    stdIO,
    play,
  }
}