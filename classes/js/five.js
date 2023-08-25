fetch("../../../js/json.json")
  .then((res) => res.json())
  .then((res) => (password = res));

window.addEventListener("contextmenu", (e) => e.preventDefault());

document.onkeydown = (e) => {
  let num = 0;
  let ctrl;
  if (e.ctrlKey !== false) ctrl = true;
  if (e.keyCode == 85) num = 85;
  if (num == 85 && ctrl == true) e.preventDefault();
};

const fiveTrain = [
  {
    name: "B1",
    href: "https://drive.google.com/file/d/1iBJTxrqnjhlVyqgjLm4O35k22iKATJ16/view?usp=sharing",
  },
  {
    name: "B2",
    href: "https://drive.google.com/file/d/1bAeJ3hnduJkrfSb--OPTwN63fJA3_oXm/view?usp=sharing",
  },
];
const fiveExam = [
  {
    name: "B1",
    href: "https://drive.google.com/file/d/1vJn-3cY0vHW2KJHSBjyjZLZKm1UvXQaa/view?usp=sharing",
  },
  {
    name: "B2",
    href: "https://drive.google.com/file/d/15A_rwaF92uqQuYqap7nUbPlaVUrbUM47/view?usp=sharing",
  },
];
const fiveExamDrive = [
  {
    name: "B1",
    href: "https://docs.google.com/forms/d/1lXFVZrm--Q3fcqtbGXT0o6TRlNe0hXzr4rcm6GdzEow/viewform?edit_requested=true",
  },
  {
    name: "B2",
    href: "https://docs.google.com/forms/d/1HYmkTFvXTXvf5g4jKoyxfcNBwK2Tp7FvJh4LqLzAhIk/viewform?edit_requested=true",
  },
];

if (location.search) {
  document
    .querySelectorAll(".head, .main-page, .main-page .container")
    .forEach((e) => e.classList.add("blur"));

  let input = document.createElement("input");
  input.type = "number";
  input.className = "pass";
  input.placeholder = "اكتب الكود";

  document.querySelector(".main-page").before(input);

  let inputPass = document.querySelector(".pass");

  window.onload = () => inputPass.focus();

  inputPass.oninput = () => {
    for (let i = 0; i < password.length; i++) {
      if (inputPass.value == password[i]) {
        document
          .querySelectorAll(".blur")
          .forEach((e) => e.classList.remove("blur"));
        inputPass.remove();
      }
    }
  };
}
if (location.search == "?train") {
  document.querySelector(".main-page .container").innerHTML = `
      <h1 class="h1-book">تمارين الخامس</h1>
      <p class="dec">تمارين الصف الخامس</p>
      <h2>جميع الدروس و التمارين</h2>
      <div class="boxs" style="display: grid">
        ${fiveTrain.map((e) => {
          return `
            <div class="box classBox">
              <div class="emty">
                <div class="text">${e.name}</div>
                <a
                  target="_blank"
                  href="${e.href}"
                  class="coolBeans"
                >
                  الذهاب
                </a>
              </div>
            </div>`;
        })}
      </div>
    `.replaceAll(
    `,
            `,
    ""
  );
} else if (location.search == "?exam") {
  document.querySelector(".main-page .container").innerHTML = `
      <h1 class="h1-book">أختبارات الخامس</h1>
      <p class="dec">إختبارات الصف الخامس</p>
      <h2>جميع إختبارات الصف الخامس</h2>
      <div class="boxs" style="display: grid">
        ${fiveExam.map((e) => {
          return `
            <div class="box classBox">
              <div class="emty">
                <div class="text">${e.name}</div>
                <a
                  target="_blank"
                  href="${e.href}"
                  class="coolBeans"
                >
                  الذهاب
                </a>
              </div>
            </div>`;
        })}
      </div>
    `.replaceAll(
    `,
            `,
    ""
  );
} else if (location.search == "?examDrive") {
  document.querySelector(".main-page .container").innerHTML = `
      <h1 class="h1-book">إختبارات إلكترونية للخامس</h1>
      <p class="dec">إختبارات إلكترونية الصف الخامس</p>
      <h2>جميع الإختبارات الإلكترونبة</h2>
      <div class="boxs" style="display: grid">
        ${fiveExamDrive.map((e) => {
          return `
            <div class="box classBox">
              <div class="emty">
                <div class="text">${e.name}</div>
                <a
                  target="_blank"
                  href="${e.href}"
                  class="coolBeans"
                >
                  الذهاب
                </a>
              </div>
            </div>`;
        })}
      </div>
    `.replaceAll(
    `,
            `,
    ""
  );
}
