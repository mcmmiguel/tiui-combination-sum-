const combinationSumRecursive = (
  candidates,
  remainingSum,
  finalCombinations = [],
  currentCombination = [],
  startFrom = 0
) => {

  const combinationsStack = [{ index: startFrom, sum: 0, combination: [] }];

  for (let stackIndex = 0; stackIndex < combinationsStack.length; stackIndex++) {
    const { index, sum, combination } = combinationsStack[stackIndex];

    if (sum === remainingSum) {
      finalCombinations.push([...currentCombination, ...combination]);
    }

    for (let i = index; i < candidates.length; i++) {
      const candidate = candidates[i];

      if (sum + candidate <= remainingSum) {
        const newCombination = [...combination, candidate];
        combinationsStack.push({ index: i, sum: sum + candidate, combination: newCombination });
      }
    }
  }

  return finalCombinations;
};

const combinationSum = (candidates, target) => {
  const orderedCombinations = combinationSumRecursive(candidates, target);
  orderedCombinations.sort((a, b) => b.length - a.length);
  return orderedCombinations;
};

module.exports = combinationSum;