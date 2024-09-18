document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let userNumber = document.getElementById("user-number").value;
    let userPin = document.getElementById("user-pin").value;
    console.log(userNumber, userPin);

    if (userNumber === "5" && userPin === "1234") {
      console.log("You are logged in");
      window.location.href = "/home.html";
    } else {
      console.log("Invalid Mobile Number or Pin");
    }
  });
