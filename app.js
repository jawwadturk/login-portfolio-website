document.getElementById("login-button").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const username = document.querySelector("#username-input").value;
    const password = document.querySelector("#password-input").value;
    
    if (username === "admin" && password === "admin") {
      window.open("https://jawwadturk.github.io/MyResume/index.html", "_blank");
    } else {
      alert("Invalid username or password");
    }
  });

