// document.getElementById("login-button").addEventListener("click", function(event) {
//     event.preventDefault(); // Prevent the form from submitting

//     const username = document.querySelector("#username-input").value;
//     const password = document.querySelector("#password-input").value;
    
//     if (username === "admin" && password === "admin") {
//       window.open("https://jawwadturk.github.io/MyResume/index.html", "_blank");
//     } else {
//       alert("Invalid username or password");
//     }
//   });

document.getElementById("login-button").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the form from submitting

  const username = document.querySelector("#username-input").value;
  const passwordInput = document.querySelector("#password-input");
  const password = passwordInput.value;
  
  if (username === "admin" && password === "admin") {
    window.open("https://jawwadturk.github.io/MyResume/index.html", "_blank");
  } else {
    alert("Invalid username or password");
  }
});
//  SHOW PASSWORD FUNCTIONALITY
document.getElementById("show-password-icon").addEventListener("click", function() {
  const passwordInput = document.querySelector("#password-input");
  const showPasswordIcon = document.querySelector("#show-password-icon");
  
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    showPasswordIcon.innerHTML = '<i class="fas fa-eye-slash"></i>';
  } else {
    passwordInput.type = "password";
    showPasswordIcon.innerHTML = '<i class="fas fa-eye"></i>';
  }
});
