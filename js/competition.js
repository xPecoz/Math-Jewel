// Scrool To Top
let btnScrol = document.querySelector(".up");

window.addEventListener("scroll", () =>
  this.scrollY >= 600
    ? btnScrol.classList.add("show")
    : btnScrol.classList.remove("show")
);

// Open And Close Sidebar
let sidebar = document.querySelector(".sidebar");
let content = document.querySelector(".content");
let btnSid = document.querySelector(".toggle");

btnSid.onclick = function () {
  sidebar.classList.toggle("close");
  content.classList.toggle("ml-250");
  document
    .querySelectorAll(".sidebar li .icon")
    .forEach((e) => e.classList.toggle("w-44"));
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

// Send Message

function SendMail() {
  let msgSend = document.querySelector(".modal");
  // let submit = document.querySelector(".title-3");
  // let closeBtn = document.querySelector(".close-btn");

  let params = {
    from_name: document.getElementById("fullName").value,
    class: 0,
    competition: 0,
  };

  emailjs.send("service_dkbeiop", "template_v97w75m", params);
  // msgSend.classList.add("active-5");

  // closeBtn.addEventListener("click", close);
  // submit.addEventListener("click", close);

  const close = () => msgSend.classList.remove("active-5");
}

addEventListener("contextmenu", (e) => e.preventDefault());

document.onkeydown = (e) => {
  let num = 0;
  let ctrl;
  if (e.ctrlKey !== false) ctrl = true;
  if (e.keyCode == 85) num = 85;
  if (num == 85 && ctrl == true) e.preventDefault();
};
