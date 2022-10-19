document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   enable alert
  document.querySelector(".alert-msg").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert-msg").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}