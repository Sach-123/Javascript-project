let textarea = document.getElementById("txtarea");
textarea.addEventListener("input", function () {
  let text = textarea.value;
  document.getElementById("char").innerHTML = text.length;
  let trimmed = text.trim();
  let words = trimmed.split(" ");
  let cleanList = words.filter(function (ele) {
    return ele != "";
  });
  document.getElementById("words").innerHTML = cleanList.length;
});
