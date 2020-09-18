// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

btn.addEventListener("click", () => {
  // 슬라이드 클라스가 있으면 비디오 멈춰 있기 때문에 슬
  //   if (!btn.classList.contains("slide")) {
  //     btn.classList.add("slide");
  //     video.pause();
  //   } else {
  //     btn.classList.remove("slide");
  //     video.play();

  //   }
  btn.classList.toggle("slide") ? video.pause() : video.play();
});

// Preloader
const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
  preloader.classList.add("hide-preloader");
});
