// localStorage.setItem('data', 5)
// console.log(localStorage.getItem('data'));

// let a = [1, 2, 3];
// localStorage.setItem("data", JSON.stringify(a));
// let b = localStorage.getItem("data");
// b = JSON.parse;
// console.log(b);
// console.log(b[2]);
// console.log(typeof b);

// let xhttp = new XMLHttpRequest();

// xhttp.onreadystatechange = function () {
//   if (this.readyState == 4 && this == 200) {
//     myfunc(this.responseText);
//   }
// };

// xhttp.open("GET", "https://automarine25.ru/");
// xhttp.send();
// function myfunc(data) {
//   console.log(data);
// }

// let xhttp = new XMLHttpRequest
// xhttp.onreadystatechange = function () {
//   if (this.readyState == 4 && this.status == 200) {
//     myfunc(this.responseText)
//   }
// }
// xhttp.open('GET', "https://automarine25.ru/")
// xhttp.send()
// function myfunc(data) {
//   console.log(data);
// }

// fetch("https://automarine25.ru/").then((data) => {
//   console.log((data));
// console.log(data.text());
// })

// let a = new Promise((resolve, reject) => {
// fetch("http://127.0.0.1:5500/index.html&quot").then((data) => {
// resolve(data.text());
// });
// });

//          Первый вариант

// fetch("http://127.0.0.1:5500/index.html&quot").then((data) => {
// console.log(data);
// data.text().then((data2) => {
// console.log(data2);
// });
// });

//          Второй вариант

// fetch("http://127.0.0.1:5500/index.html&quot")
// .then((data) => {
// console.log(data);
// return data.text();
// })
// .then((data) => {
// console.log(data);
// });

//          Третий вариант

// fetch("http://127.0.0.1:5500/index.html&quot")
// .then((data) => data.text())
// .then((data) => {
// console.log(data);
// });
//                        res      rej
// let a = new Promise((resolve, reject) => {
//   fetch("http://127.0.0.1:5500/index.html&quot").then((data) => {
//     resolve(data.text());
//   });
// });

// let b = new Promise((res, rej) => {
//   fetch("https://automarine25.ru/&quot").then((data) => {
//     res(data.text());
//   });
// });

// Promise.all([b, a]).then((data) => {
//   console.log(data);
// });
