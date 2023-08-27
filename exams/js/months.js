import users from "./results.js";

showResult.addEventListener("click", function () {
  if (code.value)
    if (users[code.value]) {
      September.textContent = users[code.value].months.September;
      October.textContent = users[code.value].months.October;
      November.textContent = users[code.value].months.November;
      December.textContent = users[code.value].months.December;
      February.textContent = users[code.value].months.February;
      March.textContent = users[code.value].months.March;
      April.textContent = users[code.value].months.April;
      May.textContent = users[code.value].months.May;
    } else alert("الكود خطأ");
  else alert("إكتب الكود");
});
