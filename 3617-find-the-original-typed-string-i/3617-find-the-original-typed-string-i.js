/**
 * @param {string} word
 * @return {number}
 */
function possibleStringCount(word) {
  const resultSet = new Set();
  resultSet.add(word); // original word is always valid

  let i = 0;

  while (i < word.length) {
    let j = i;

    // Find the end of the repeated group
    while (j < word.length && word[j] === word[i]) {
      j++;
    }

    const groupLength = j - i;

    if (groupLength > 1) {
      for (let len = 1; len < groupLength; len++) {
        const reduced =
          word.slice(0, i) + word[i].repeat(len) + word.slice(j);
        resultSet.add(reduced);
      }
    }

    i = j; // move to next group
  }

  return resultSet.size;
}
