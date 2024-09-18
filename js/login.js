document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let userNumber = document.getElementById("user-number").value;
    console.log(userNumber);
    let userPin = document.getElementById("user-pin").value;
    console.log(userPin);
  });
