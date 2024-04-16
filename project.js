document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    document.getElementById("message").textContent = "Registration successful! Welcome, " + username + "!";
  });
  