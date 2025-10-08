//your JS code here. If required.
let uTextName = document.getElementById("username");
let uTextPass = document.getElementById("password");
let btn = document.getElementById("submit");
let existingUser = document.getElementById("existing");
let rememberMe = document.getElementById("checkbox");

// Hide "Login as existing user" button if no user is saved
if (!(localStorage.getItem("uName") && localStorage.getItem("uPass"))) {
  existingUser.style.display = "none";
}

// Handle submit
btn.addEventListener("click", (e) => {
  e.preventDefault(); // prevent form reload

  let uName = uTextName.value.trim();
  let uPassword = uTextPass.value.trim();

  if (uName && uPassword) {
    alert(`Logged in as ${uName}`);
  } else {
    alert("Please enter both username and password.");
    return;
  }

  if (rememberMe.checked) {
    localStorage.setItem("uName", uName);
    localStorage.setItem("uPass", uPassword);
  } else {
    localStorage.removeItem("uName");
    localStorage.removeItem("uPass");
  }
});

// Handle existing user login
existingUser.addEventListener("click", (e) => {
  e.preventDefault();
  if (localStorage.getItem("uName") && localStorage.getItem("uPass")) {
    let existingName = localStorage.getItem("uName");
    let existingPassword = localStorage.getItem("uPass");

    uTextName.value = existingName;
    uTextPass.value = existingPassword;
    rememberMe.checked = true;

    alert(`Logged in as ${existingName}`);
  }
});
