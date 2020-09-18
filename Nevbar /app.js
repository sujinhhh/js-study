// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", () => {
  // 메뉴가 안보이면 보이게 하고 보이면 안보이게 하는거
  console.log(links.classList);

  //   if (links.classList.contains("show-links")) {
  //     links.classList.remove("show-links");
  //   } else {
  //     links.classList.add("show-links");
  //   }

  //  -----> 위에 코드를 한방에
  links.classList.toggle("show-links");
});
