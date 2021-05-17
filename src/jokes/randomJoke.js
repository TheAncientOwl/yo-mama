import JokesData from './JokesData';

const MAX_TRIAL_RANDOM_INDEX_NUMBER = 40;
const NO_MORE_JOKES_CODE = -1;

const usedIndexes = new Set();

const jokesNumber = JokesData.reduce((jokesNumber, currentCategory) => jokesNumber + currentCategory.jokes.length, 0);

const randomNumberBetween = (min, max) => Math.floor(Math.random() * (max - min) + min);

const chooseRandomJokeIndex = () => {
  for (let i = 0; i < MAX_TRIAL_RANDOM_INDEX_NUMBER; i++) {
    const index = randomNumberBetween(0, jokesNumber);
    if (!usedIndexes.has(index)) {
      usedIndexes.add(index);
      return index;
    }
  }

  if (usedIndexes.size === jokesNumber) usedIndexes.clear();
  return NO_MORE_JOKES_CODE;
};

export default function randomJoke() {
  const globalJokeIndex = chooseRandomJokeIndex();
  if (globalJokeIndex === NO_MORE_JOKES_CODE) return "Cannot find a new joke LOL, u've seen almost all of them xD";

  let maxCategoryIndex = 0;
  for (const category of JokesData) {
    maxCategoryIndex += category.jokes.length;
    if (globalJokeIndex < maxCategoryIndex) {
      const categoryIndex = maxCategoryIndex - globalJokeIndex;
      return category.jokes[categoryIndex];
    }
  }
}
