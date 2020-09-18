// API 데이터 가져오기
async function start() {
  const response = await fetch("https://dog.ceo/api/breeds/list/all");
  const data = await response.json();
  createBreedList(data.message);
}
start();
function createBreedList(breedList) {
  // breedList 를 넣으면 object가 나옴 그래서 Object.key 메소드를 써야햠
  // 맵은 오브젝트를 하나씩 나오게 하는 기능
  document.getElementById("breed").innerHTML = `
 <select onchange = "loadByBreed(this.value)">
 <option>Choose a Dog breed</option>
       ${Object.keys(breedList)
         .map(function (breed) {
           return ` <option>${breed}</option>`;
         })
         .join("")}
      </select>
 `;
}

async function loadByBreed(breed) {
  if (breed != "Choose a Dog breed") {
    const respsonse = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
    const data = await respsonse.json();
    createSlideshow(data.message);
  }
}

function createSlideshow(images) {
  let currentPosition = 0;
  document.getElementById("slideshow").innerHTML = `
    <div
    class="slide"
    style="
      background-image: url('${images[0]}');
    "
  ></div>
    <div
    class="slide"
    style="
      background-image: url('${images[1]}');
    "
  ></div>
    `;
  currentPosition += 2;
  setInterval((netxSlide) => {
    document.getElementById("slideshow").insertAdjacentHTML(
      "beforeend",
      `  <div
        class="slide"
        style="
          background-image: url('${images[currentPosition]}');
        "
      ></div>`
    );
    setTimeout(function () {
      document.querySelector(".slide").remove();
    }, 1000);
    if (currentPosition + 1 >= images.length) {
      currentPosition = 0;
    } else {
      currentPosition++;
    }
  }, 3000);
}
