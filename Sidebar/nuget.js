// =====================
//  **** longest words
// =====================

// function longestWord(str) {
//   let words = str.split(" ");
//   let longestWord = "";
//   for (let word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// }
// console.log(longestWord("I will be the one"));

// =============================================================
//  **** Capitalized letter
// =============================================================

// function capitalized(str) {
//   let words = str.split(" ").map((item) => {
//     // let firstLetter = item.slice(0, 1);
//     // let rest = item.slice(1);
//     // firstLetter = firstLetter.toUpperCase();
//     // return ` ${firstLetter}${rest}`;

//     return item.charAt(0).toUpperCase() + item.slice(1);
//   });
//   return words.join(" ");
// }
// console.log(
//   capitalized(
//     "We are overturning reasonings and every lofty thing raised up against the knowledge of God"
//   )
// );

// =============================================================
//  **** ArraySum
// =============================================================

function ArraySum(arr) {
  let tempArr = arr.sort((a, b) => {
    return a - b;
  });
  let largest = tempArr.pop();

  let number = 0;
  tempArr.forEach((item) => (number += item));
  return number;
}

console.log(ArraySum([1, 3, 4, 8]));
console.log(ArraySum([2, 5, 7, 0]));
