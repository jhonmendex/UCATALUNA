const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
let userData = {
  email: "jhon@gmail.com",
  password: "123",
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  userData.email = emailInput.value;
  userData.password = passwordInput.value;
  alert(`email: ${userData.email} - password: ${userData.password}`);
});
