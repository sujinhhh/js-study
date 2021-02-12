// async

function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`making request to ${location}`);
    if (location === "google") {
      resolve("google says hi");
    } else {
      reject("we can only talk to google");
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("processing response");
    resolve(`extra informaiton ${response}`);
  });
}

// makeRequest("google")
//   .then((response) => {
//     console.log("request recieved");
//     return processRequest(response);
//   })
//   .then((processResponse) => {
//     console.log(processResponse);
//   });

async function dowork() {
  const response = await makeRequest("google");
  console.log("request recieved");
  const process = await processRequest(response);
  console.log(process);
}
