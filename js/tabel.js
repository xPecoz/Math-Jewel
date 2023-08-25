fetch("../js/json.json")
  .then((res) => res.json())
  .then((res) => (password = res));

let inputPass = document.querySelector(".pass");

window.onload = () => inputPass.focus();

inputPass.oninput = () => {
  for (let i = 0; i < password.length; i++)
    if (inputPass.value == password[i]) {
      document
        .querySelectorAll(".blur")
        .forEach((e) => e.classList.remove("blur"));
      inputPass.remove();
    }
};
