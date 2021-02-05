// 틀린 글자 대체하기

const story =
  "There was once an employee named Dwight. Dwigt was not very smart, but he was loyal. I could have promoted dwight but I did not.";

const myNameSearch = /Dwigh?t/gi;
// grobal, lowercase upprecase => case insensitive

const updateStory = story.replace(myNameSearch, "sujin");

document.querySelector("#app").insertAdjacentHTML(
  "beforeend",
  `<hr> 
<h2>글자 대체하는 프로그램 만들기 </h2>
${updateStory}`
);

// 중간 콤마 없애기
const pets = [
  "cat: Smith, Meowsalot",
  "young dog: Jones, Barksalot",
  "rabbit: Doe, Fluffy",
];

const petPattern = /([a-z\s]+):\s([a-z]+),\s([a-z]+)/i;

const petsUpdated = pets.map((pet) =>
  pet.replace(petPattern, '$3 $2 <span class="description">$1</span>')
);

document.querySelector("#app").insertAdjacentHTML(
  "beforeend",
  `<hr>
  <h2> 중간 콤마 없애기 </h2>
      <ul>
        ${petsUpdated.map((item) => `<li>${item}</li>`).join("")}
      </ul>
      <hr>
    `
);
