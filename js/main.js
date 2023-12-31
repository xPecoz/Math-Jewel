// Scrool To Top
let btnScrol = document.querySelector(".up");

window.addEventListener("scroll", () => {
  this.scrollY >= 600
    ? btnScrol.classList.add("show")
    : btnScrol.classList.remove("show");
});

// Open And Close Sidebar
let sidebar = document.querySelector(".sidebar");
let content = document.querySelector(".content");
let btnSid = document.querySelector(".toggle");

btnSid.onclick = function () {
  sidebar.classList.toggle("close");
  content.classList.toggle("ml-250");
  document
    .querySelectorAll(".sidebar li .icon")
    .forEach((ele) => ele.classList.toggle("w-44"));
};

// Light Mode
let btnDark = document.querySelector(".head i");

if (localStorage.getItem("dark")) {
  document.body.classList.add("dark-theme");
  btnDark.classList.add("uil-sun");
} else {
  document.body.classList.remove("dark-theme");
  btnDark.classList.remove("uil-sun");
}

btnDark.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  btnDark.classList.toggle("uil-sun");
  document.body.classList.contains("dark-theme")
    ? localStorage.setItem("dark", true)
    : localStorage.removeItem("dark");
});

// Random Border Color

// CounDown
// let countDownDate4 = new Date("March 5, 2023").getTime();
// let countDownDate5 = new Date("March 5, 2023").getTime();
// let countDownDate6 = new Date("March 5, 2023").getTime();

// let counter4 = setInterval(() => {
//   if (dateDiff < 0) {
//     clearInterval(counter4);
//   }
//   let dateNow = new Date().getTime();
//   let dateDiff = countDownDate4 - dateNow;

//   let months = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 30));
//   let days = Math.floor(
//     (dateDiff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
//   );

//   document.querySelector(".month4").innerHTML = months;
//   document.querySelector(".days4").innerHTML = days;
// }, 1000);

// let counter5 = setInterval(() => {
//   if (dateDiff < 0) {
//     clearInterval(counter6);
//   }

//   let dateNow = new Date().getTime();
//   let dateDiff = countDownDate5 - dateNow;

//   let months = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 30));
//   let days = Math.floor(
//     (dateDiff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
//   );

//   document.querySelector(".month5").innerHTML = months;
//   document.querySelector(".days5").innerHTML = days;
// }, 1000);

// let counter6 = setInterval(() => {
//   if (dateDiff < 0) {
//     clearInterval(counter6);
//   }

//   let dateNow = new Date().getTime();
//   let dateDiff = countDownDate6 - dateNow;

//   let months = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 30));
//   let days = Math.floor(
//     (dateDiff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
//   );

//   document.querySelector(".month6").innerHTML = months;
//   document.querySelector(".days6").innerHTML = days;
// }, 1000);

window.addEventListener("contextmenu", (e) => e.preventDefault());

document.onkeydown = (e) => {
  let num = 0,
    ctrl;
  if (e.ctrlKey !== false) ctrl = true;
  if (e.keyCode == 85) num = 85;
  if (num == 85 && ctrl == true) e.preventDefault();
};
