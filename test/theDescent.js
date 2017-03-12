/**
 * Created by hadgi on 10/03/2017.
 */

import theDescent from '../src/theDescent';

const expect = require('chai').expect;

describe('The Descent', () => {
  it('plays descending mountains', () => {
    const game = theDescent();
    game.stdIO.loadInput([
      '9', '8', '7', '6', '5', '4', '3', '2',
      '0', '8', '7', '6', '5', '4', '3', '2',
      '0', '0', '7', '6', '5', '4', '3', '2',
      '0', '0', '0', '6', '5', '4', '3', '2',
      '0', '0', '0', '0', '5', '4', '3', '2',
      '0', '0', '0', '0', '0', '4', '3', '2',
      '0', '0', '0', '0', '0', '0', '3', '2',
      '0', '0', '0', '0', '0', '0', '0', '2'
    ]);
    const results = [0, 1, 2, 3, 4, 5, 6, 7];
    for (let i = 0; i < 8; i++) {
      game.play().then(
        function () {
          expect(game.stdIO.getOutput()).to.equal(results[i]);
        }
      );
    }
  });

  it('plays scattered mountains', () => {
    const game = theDescent();
    game.stdIO.loadInput([
      '9', '8', '7', '3', '6', '5', '2', '4',
      '0', '8', '7', '3', '6', '5', '2', '4',
      '0', '0', '7', '3', '6', '5', '2', '4',
      '0', '0', '0', '3', '6', '5', '2', '4',
      '0', '0', '0', '3', '0', '5', '2', '4',
      '0', '0', '0', '3', '0', '0', '2', '4',
      '0', '0', '0', '3', '0', '0', '2', '0',
      '0', '0', '0', '0', '0', '0', '2', '0'
    ]);
    const results = [0, 1, 2, 4, 5, 7, 3, 6];
    for (let i = 0; i < 8; i++) {
      game.play().then(
        function () {
          expect(game.stdIO.getOutput()).to.equal(results[i]);
        }
      );
    }
  });

  it('plays strong mountains #1', () => {
    const game = theDescent();
    game.stdIO.loadInput([
      '0', '6', '7', '5', '0', '8', '1', '0',
      '0', '6', '7', '5', '0', '0', '1', '0',
      '0', '6', '4', '5', '0', '0', '1', '0',
      '0', '2', '4', '5', '0', '0', '1', '0',
      '0', '2', '4', '3', '0', '0', '1', '0',
      '0', '2', '0', '3', '0', '0', '1', '0',
      '0', '2', '0', '0', '0', '0', '1', '0',
      '0', '0', '0', '0', '0', '0', '1', '0'
    ]);
    const results = [5, 2, 1, 3, 2, 3, 1, 6];
    for (let i = 0; i < 8; i++) {
      game.play().then(
        function () {
          expect(game.stdIO.getOutput()).to.equal(results[i]);
        }
      );
    }
  });

  it('plays strong mountains #2', () => {
    const game = theDescent();
    game.stdIO.loadInput([
      '0', '6', '0', '5', '0', '8', '0', '6',
      '0', '6', '0', '5', '0', '5', '0', '6',
      '0', '6', '0', '5', '0', '5', '0', '0',
      '0', '4', '0', '5', '0', '5', '0', '0',
      '0', '4', '0', '5', '0', '0', '0', '0',
      '0', '4', '0', '2', '0', '0', '0', '0',
      '0', '2', '0', '2', '0', '0', '0', '0',
      '0', '2', '0', '0', '0', '0', '0', '0'
    ]);
    const results = [5, 7, 1, 5, 3, 1, 3, 1];
    for (let i = 0; i < 8; i++) {
      game.play().then(
        function () {
          expect(game.stdIO.getOutput()).to.equal(results[i]);
        }
      );
    }
  });

  it('plays one mountain', () => {
    const game = theDescent();
    game.stdIO.loadInput([
      '0', '0', '0', '8', '0', '0', '0', '0',
      '0', '0', '0', '7', '0', '0', '0', '0',
      '0', '0', '0', '6', '0', '0', '0', '0',
      '0', '0', '0', '5', '0', '0', '0', '0',
      '0', '0', '0', '4', '0', '0', '0', '0'
    ]);
    const results = [3, 3, 3, 3, 3];
    for (let i = 0; i < 5; i++) {
      game.play().then(
        function () {
          expect(game.stdIO.getOutput()).to.equal(results[i]);
        }
      );
    }
  });
});
