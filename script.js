const form = document.getElementById("myForm");

const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const password = document.getElementById("password");
const email = document.getElementById("email");

const emailValid = String(email.value.trim)
  .toLowerCase()
  .match(/^\S+@\S+\.\S+$/);

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (fname.value.trim() === "") {
    fname.classList.add("error");
    document.getElementById("fnmErr").style.display = "inline";
    document.getElementById("fnmErrImg").style.display = "inline";
    fname.value = " ";
  }

  if (lname.value.trim() === "") {
    lname.classList.add("error");
    document.getElementById("lnmErr").style.display = "inline";
    document.getElementById("lnmErrImg").style.display = "inline";
    lname.value = " ";
  }

  if (password.value.trim() === "") {
    password.classList.add("error");
    document.getElementById("passErr").style.display = "inline";
    document.getElementById("passErrImg").style.display = "inline";
    password.value = " ";
  }

  if (email.value.trim() === "" || !emailValid) {
    email.classList.add("error");
    document.getElementById("emlErr").style.display = "inline";
    document.getElementById("emlErrImg").style.display = "inline";
    email.style.color = "hsl(0, 100%, 74%)";
    email.value = "email@example/com";
  }
});
