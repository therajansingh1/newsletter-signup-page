let errorMsg = document.getElementById("error-msg");
let emailBorder = document.getElementById("email");
let email;
const emailStore = (event) => {
  email = event.target.value;
};

function checkValue() {
  console.log(email);

  var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!pattern) {
    errorMsg.innerHTML = "Valid email required";
    emailBorder.style.borderColor = "hsl(4, 100%, 67%)";
    emailBorder.style.color = "hsl(4, 100%, 67%)";
  } else {
    localStorage.setItem("email", email);
    window.location.href = "./sucess.html";
  }
}

function end() {
  window.location.href = "./index.html";
}

document.addEventListener("DOMContentLoaded", () => {
  const email = localStorage.getItem("email");
  var para = document.getElementById("para");
  para.innerText = email;
});
