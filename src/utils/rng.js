import seedrandom from 'seedrandom';

let rng = 0;

const init = (seed) => {
  rng = new seedrandom(seed);
};

const randArb = (min, max) => rng() * (max - min) + min;

const randInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(rng() * (max - min + 1)) + min;
};

const choose = (arr) => arr[Math.floor(rng() * arr.length)];

const chance = (n) => n < randInt(0, 100);

export default {
  init,
  randArb,
  randInt,
  choose,
  chance
};
