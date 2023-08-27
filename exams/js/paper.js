import users from "./results.js";

showResult.addEventListener("click", function () {
  if (code.value)
    if (users[code.value]) {
      week1.textContent = users[code.value].weeks[0];
      week2.textContent = users[code.value].weeks[1];
    } else alert("الكود خطأ");
  else alert("إكتب الكود");
});
