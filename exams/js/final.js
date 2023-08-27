import users from "./results.js";

showResult.addEventListener("click", function () {
  if (code.value)
    if (users[code.value]) {
      one.textContent = users[code.value].final[0];
      two.textContent = users[code.value].final[1];
      there.textContent = users[code.value].final[2];
      four.textContent = users[code.value].final[3];
      five.textContent = users[code.value].final[4];
      six.textContent = users[code.value].final[5];
      sever.textContent = users[code.value].final[6];
      eigth.textContent = users[code.value].final[7];
      nine.textContent = users[code.value].final[8];
      ten.textContent = users[code.value].final[9];
    } else alert("الكود خطأ");
  else alert("إكتب الكود");
});
