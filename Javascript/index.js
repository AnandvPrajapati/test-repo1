// // sayHi();
// function sayHi(a, b) {
//   console.log('jay ho....!');
// }

// function x() {
//   let count = 0;
//   document.getElementById("clickme").addEventListener("click", function xyz() {
//     console.log("Button Clicked..", ++count);
//   });
// }
// // x();

// function a() {
//   console.log("Anand");
// }
// // a();

// function loop() {
//   for(let i = 0; i < 1001; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 100);
//   }
//   console.log("hello");
// }
// // loop();

// fetch("https://api.restful-api.dev/objects").then(function cb() {
//   console.log("CB done..")
// });

// // // Selecting an element
// // const element = document.getElementById('myElement1');

// // // Changing the content of an element
// // element.textContent = 'Hello, World!';

// // // Adding a new element to the DOM
// // const newElement = document.createElement('div');
// // newElement.textContent = 'This is a new element';
// // document.body.appendChild(newElement);


// if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(position => {
//       console.log('Latitude:', position.coords.latitude);
//       console.log('Longitude:', position.coords.longitude);
//   }, error => {
//       console.error('Error getting location:', error);
//   });
// } else {
//   console.error('Geolocation is not supported by this browser.');
// }


// // const canvas = document.getElementById('myCanvas');
// // const ctx = canvas.getContext('2d');

// // // Draw a rectangle
// // ctx.fillStyle = 'red';
// // ctx.fillRect(10, 10, 100, 100);


// // // Storing data
// // localStorage.setItem('username', 'JohnDoe');

// // // Retrieving data
// // const username = localStorage.getItem('username');
// // console.log(username); // 'JohnDoe'

// // // Removing data
// // localStorage.removeItem('username');

// // // Clearing all data
// // localStorage.clear();

// console.log('Start');

// setTimeout(function() {
//     console.log('Timeout');
// }, 0);

// console.log('End');

// setTimeout(() => {
//     console.log('First callback');
//     setTimeout(() => {
//         console.log('Second callback');
//         setTimeout(() => {
//             console.log('Third callback');
//         }, 5000);
//     }, 5000);
// }, 5000);

// function repeatTask() {
//     console.log('Repeated task');
//     setTimeout(repeatTask, 1000);
// }

// repeatTask();

// setTimeout(() => {
//     console.log('First callback');
//     setTimeout(() => {
//         console.log('Second callback');
//         setTimeout(() => {
//             console.log('Third callback');
//         }, 5000);
//     }, 5000);
// }, 5000);

// for(let i = 1; i < 61; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, i * 2000);
// }
// console.log("hello");