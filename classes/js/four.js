fetch("../../js/json.json")
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

const fourTrain = [
  {
    name: "A1",
    href: "https://drive.google.com/file/d/10saF9UpaX752BqnPt10r32Sc1T-Yia0y/view?usp=sharing",
  },
  {
    name: "A2",
    href: "https://drive.google.com/file/d/1beyAKSVUfT0XVm3HvOw1q7ALFQ4Vyw-O/view?usp=sharing",
  },
];
const fourExam = [
  {
    name: "A1",
    href: "https://drive.google.com/file/d/1oe5DF1MDVfPWITQ-YsbyUptqT55MCXnj/view?usp=sharing",
  },
  {
    name: "A2",
    href: "https://drive.google.com/file/d/1F2o8AfKpOLE-8p3U-SQBiw_SyzyvRYPN/view?usp=sharing",
  },
];
const fourExamDrive = [
  {
    name: "A1",
    href: "https://docs.google.com/forms/d/1nOSuqhoql7URe8WSbapMibxsMt1R955Zl9CDdMUqqKU/viewform?edit_requested=true",
  },
  {
    name: "A2",
    href: "https://docs.google.com/forms/d/1zAeEKmw_dDAZ85-E3d_T3vYfPj2l27eZisdrljmpA9E/viewform?edit_requested=true",
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
      <h1 class="h1-book">تمارين الرابع</h1>
      <p class="dec">تمارين الصف الرابع</p>
      <h2>جميع الدروس و التمارين</h2>
      <div class="boxs" style="display: grid">
        ${fourTrain.map((e) => {
          return `
            <div class="box classBox">
              <div class="emty" style="padding: 10px">
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
      <h1 class="h1-book">أختبارات الرابع</h1>
      <p class="dec">إختبارات الصف الرابع</p>
      <h2>جميع إختبارات الصف الرابع</h2>
      <div class="boxs" style="display: grid">
        ${fourExam.map((e) => {
          return `
            <div class="box classBox">
              <div class="emty" style="padding: 10px">
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
      <h1 class="h1-book">إختبارات إلكترونية للرابع</h1>
      <p class="dec">إختبارات إلكترونية الصف الرابع</p>
      <h2>جميع الإختبارات الإلكترونبة</h2>
      <div class="boxs" style="display: grid">
        ${fourExamDrive.map((e) => {
          return `
            <div class="box classBox">
              <div class="emty" style="padding: 10px">
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
