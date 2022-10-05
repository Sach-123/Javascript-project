let submit = document.getElementById("submit");
submit.addEventListener("click", function () {
  let username = document.getElementById("username").value;
  let pwd = document.getElementById("pwd").value;
  let usererror = document.getElementById("usererror");
  let pwderror = document.getElementById("pwderror");
  let success = document.getElementById("success");
  success.innerHTML = "";
  if (username.length == 0) {
    usererror.innerHTML = "Enter Username";
    usererror.classList.add("error");
  } else if (username.length > 0 && username.length < 4) {
    usererror.innerHTML = "Username should be more than 3 character";
  }
  if (pwd.length == 0) {
    pwderror.innerHTML = "Enter Password";
    pwderror.classList.add("error");
  } else {
    pwderror.innerHTML = "";
  }
  if (username.length > 3 && pwd.length > 0) {
    console.log("Username : " + username);
    console.log("password : " + pwd);
    usererror.innerHTML = "";
    success.innerHTML = "Validation Successful !";
    success.style.color = "green";
  }
  document.getElementById("username").value = "";
  document.getElementById("pwd").value = "";
});
