const form = document.querySelector("form");
const info = document.querySelector(".container");
const invalid = document.querySelector(".invalid");
const success = document.querySelector(".success");
const input = document.getElementById("email-input");
const submittedEmail = document.querySelector(".submit_mail");
const dismissBtn = document.getElementById("dismiss_btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value == "") {
    invalid.textContent = "Valid email required";
    input.classList.add("error");
  } else {
    success.classList.add("pop-up");
    info.classList.add("hide");
    submittedEmail.textContent = input.value;
  }
});

dismissBtn.addEventListener("click", () => {
  window.location.reload();
});

input.oninput = () => {
  invalid.textContent = "";
  input.classList.remove("error");
};
