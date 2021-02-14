// // async

// const study = async () => {
//   const response = await fetch(
//     "https://dog.ceo/api/breed/hound/images/random/3"
//   );
//   const data = await response.json();
//   return data;
// };

// study()
//   .then((data) => {
//     const div = document.querySelector(".parent");
//     let result = "";
//     data.message.forEach((item) => {
//       result += ` <img src = ${item} >`;
//     });
//     div.innerHTML = result;
//     console.log(div);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });
