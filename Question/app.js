//using selectors inside the element
const questions = document.querySelectorAll(".question");

questions.forEach((article) => {
  console.log(article);
  const btn = article.querySelector(".question-btn");
  btn.addEventListener("click", () => {
    //   위에 있는 것이랑 article이랑 다르면 창닫기
    questions.forEach((item) => {
      if (item !== article) {
        item.classList.remove("show-text");
      }
    });
    article.classList.toggle("show-text");
  });
});

// traversing the dom

// const btns = document.querySelectorAll(".question-btn");

// btns.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-text");
//   });
// });
