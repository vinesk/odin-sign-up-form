const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const error = document.querySelector(".error");

const validPassword = () =>
  (error.textContent =
    password.value === confirmPassword.value ? "" : "* Password do not match");

password.addEventListener("keyup", validPassword);
confirmPassword.addEventListener("keyup", validPassword);
