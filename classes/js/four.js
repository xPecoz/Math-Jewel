fetch("../js/json.json")
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
    href: "https://drive.google.com/file/d/10saF9UpaX752BqnPt10r32Sc1T-Yia0y/view",
  },
  {
    name: "A2",
    href: "https://drive.google.com/file/d/1beyAKSVUfT0XVm3HvOw1q7ALFQ4Vyw-O/view",
  },
  {
    name: "A3",
    href: "https://drive.google.com/file/d/1e1t8LSi1s5YyOI5wZPEjEZEVYmlV8gMU/view",
  },
  {
    name: "A4",
    href: "https://drive.google.com/file/d/1DM5cO7Y2YNqq17vElIK2e4KnCZge8eXq/view",
  },
];
const fourExam = [
  {
    name: "A1",
    href: "https://drive.google.com/file/d/1oe5DF1MDVfPWITQ-YsbyUptqT55MCXnj/view",
  },
  {
    name: "A2",
    href: "https://drive.google.com/file/d/1F2o8AfKpOLE-8p3U-SQBiw_SyzyvRYPN/view",
  },
  {
    name: "A3",
    href: "https://drive.google.com/file/d/1-08V8Qbs5CMLRSoUUqxxi7ah5t1gkW5A/view",
  },
  {
    name: "A4",
    href: "https://drive.google.com/file/d/1VwYuXGAktwQ1ndQTZguavuGYY78Zxq4R/view",
  },
];
const fourExam_month = [
  {
    name: "اغسطس",
    href: "#",
  },
];
const fourExam_final = [
  {
    name: "الإختبار الأول",
    href: "#",
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
  {
    name: "A3",
    href: "https://docs.google.com/forms/d/1HuoeypEq2pagB5mA-niydOhdM_1TLpssHcgig9pm1yM/viewform?edit_requested=true",
  },
  {
    name: "A4",
    href: "https://docs.google.com/forms/d/1Ponxlkg_3kmwm8l1BLNye-SDR_pSd38xwlCujRy-9qc/viewform?edit_requested=true",
  },
];
const fourExamDrive_final = [
  {
    name: "الإختبار الأول",
    href: "#",
  },
];
const fourExamDrive_month = [
  {
    name: "اغسطس",
    href: "#",
  },
];
const fourLearnPDF = [
  {
    name: "A1",
    href: "https://drive.google.com/file/d/1RywNEdhA-t3t7jEPCqEu4lG_X82bIOpO/view",
  },
  {
    name: "A2",
    href: "https://drive.google.com/file/d/1YENh8xbSRTl3YUPk1WtMnxZbYSXsqwXe/view",
  },
  {
    name: "A3",
    href: "https://drive.google.com/file/d/1a4l6uJumxhWd0qYSzZM0oKQ2dxYH6DFN/view",
  },
  {
    name: "A4",
    href: "https://drive.google.com/file/d/1elxGNgtNKx3lrPbaUZTOU0rdW1KgiUO8/view",
  },
];

if (
  location.search &&
  location.search !== "?exam" &&
  location.search !== "?examDrive"
) {
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
        <div class="box classBox">
          <div class="emty" style="padding: 10px">
            <div class="text">إختبارات الدروس</div>
            <a href="?exam&lesson" class="coolBeans">الذهاب</a>
          </div>
        </div>
        <div class="box classBox">
          <div class="emty" style="padding: 10px">
            <div class="text">إختبارات الشهور</div>
            <a href="?exam&month" class="coolBeans">الذهاب</a>
          </div>
        </div>
        <div class="box classBox">
          <div class="emty" style="padding: 10px">
            <div class="text">إختبارات نهائية</div>
            <a href="?exam&final" class="coolBeans">الذهاب</a>
          </div>
        </div>
      </div>
    `;
} else if (location.search == "?exam&lesson") {
  document.querySelector(".main-page .container").innerHTML = `
      <h1 class="h1-book">أختبارات الرابع</h1>
      <p class="dec">إختبارات الصف الرابع</p>
      <h2>إختبارات دروس الصف الرابع</h2>
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
} else if (location.search == "?exam&month") {
  document.querySelector(".main-page .container").innerHTML = `
      <h1 class="h1-book">أختبارات الرابع</h1>
      <p class="dec">إختبارات الصف الرابع</p>
      <h2>إختبارات شهور الصف الرابع</h2>
      <div class="boxs" style="display: grid">
        ${fourExam_month.map((e) => {
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
} else if (location.search == "?exam&final") {
  document.querySelector(".main-page .container").innerHTML = `
      <h1 class="h1-book">أختبارات الرابع</h1>
      <p class="dec">إختبارات الصف الرابع</p>
      <h2>إختبارات نهائية للصف الرابع</h2>
      <div class="boxs" style="display: grid">
        ${fourExam_final.map((e) => {
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
      <h1 class="h1-book">أختبارات الرابع</h1>
      <p class="dec">إختبارات الصف الرابع</p>
      <h2>إختبارات إلكترونية للصف الرابع</h2>
      <div class="boxs" style="display: grid">
        <div class="box classBox">
          <div class="emty" style="padding: 10px">
            <div class="text">إختبارات الدروس</div>
            <a href="?examDrive&lesson" class="coolBeans">الذهاب</a>
          </div>
        </div>
        <div class="box classBox">
          <div class="emty" style="padding: 10px">
            <div class="text">إختبارات الشهور</div>
            <a href="?examDrive&month" class="coolBeans">الذهاب</a>
          </div>
        </div>
        <div class="box classBox">
          <div class="emty" style="padding: 10px">
            <div class="text">إختبارات نهائية</div>
            <a href="?examDrive&final" class="coolBeans">الذهاب</a>
          </div>
        </div>
      </div>
    `;
} else if (location.search == "?examDrive&lesson") {
  document.querySelector(".main-page .container").innerHTML = `
      <h1 class="h1-book">أختبارات الرابع</h1>
      <p class="dec">إختبارات الصف الرابع</p>
      <h2>إختبارات إلكترونية لدروس الرابع</h2>
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
} else if (location.search == "?examDrive&month") {
  document.querySelector(".main-page .container").innerHTML = `
      <h1 class="h1-book">أختبارات الرابع</h1>
      <p class="dec">إختبارات الصف الرابع</p>
      <h2>إختبارات إلكترونية لشهور الرابع</h2>
      <div class="boxs" style="display: grid">
        ${fourExamDrive_month.map((e) => {
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
} else if (location.search == "?examDrive&final") {
  document.querySelector(".main-page .container").innerHTML = `
      <h1 class="h1-book">أختبارات الرابع</h1>
      <p class="dec">إختبارات الصف الرابع</p>
      <h2>إختبارات إلكترونية نهائية للرابع</h2>
      <div class="boxs" style="display: grid">
        ${fourExam_final.map((e) => {
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
} else if (location.search == "?learnPDF") {
  document.querySelector(".main-page .container").innerHTML = `
      <h1 class="h1-book">ملحقات الرابع</h1>
      <p class="dec">ملحقات الصف الرابع</p>
      <h2>ملحقات دروس الصف الرابع</h2>
      <div class="boxs" style="display: grid">
        ${fourLearnPDF.map((e) => {
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
