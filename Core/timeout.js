const callbackFn = function () {
  console.log("deplay callback method");
};
const timerId = setTimeout(callbackFn, 4000);
const canceltimer = function () {
  console.log("lets see what wil have in timer Id", timerId);
  clearTimeout(timerId);
};
const msg = "intial msg";

const h1 = document.createElement("h1");
h1.innerHTML = msg;

const h1Literal = `<h1> ${msg}</h1>`;

const buttonClickEventHandler = function () {
  console.log("button click called");
  msg = "button clicked ";
};
const buttonElement = document.createElement("button", "save");
buttonElement.addEventListener("click", buttonClickEventHandler, false);
buttonElement.innerText = "click here";

const _container = document.createElement("div");
_container.appendChild(h1);
_container.appendChild(buttonElement);

const _body = document.querySelector("body");
_body.appendChild(_container);

const successCallback = function () {};
const failureCallback = function () {};

const myPromise = new Promise((resolve, reject) => {
  fetch("https://run.mocky.io/v3/8b1f5b3b-14b4-4002-875d-20369433cf25")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json(); // This returns a Promise
    })
    .then((data) => {
      resolve(data); // Resolve with the actual data
    })
    .catch((error) => {
      reject(error);
    });
});
const myPromise1 = new Promise((resolve, reject) => {
  fetch("https://run.mocky.io/v3/8b1f5b3b-14b4-4002-875d-20369433cf25")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json(); // This returns a Promise
    })
    .then((data) => {
      resolve(data); // Resolve with the actual data
    })
    .catch((error) => {
      reject(error);
    });
});
const myPromise2 = new Promise((resolve, reject) => {
  fetch("https://run.mocky.io/v3/8b1f5b3b-14b4-4002-875d-20369433cf25")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json(); // This returns a Promise
    })
    .then((data) => {
      resolve(data); // Resolve with the actual data
    })
    .catch((error) => {
      reject(error);
    });
});

myPromise.then(
  (data) => {
    console.log("Success callback, data:", data);
  },
  (error) => {
    console.log("Error callback, error:", error);
  }
);
