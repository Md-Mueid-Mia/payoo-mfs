document
  .getElementById("btn-case-out")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const caseOut = document.getElementById("input-case-out").value;
    const PinNumber = document.getElementById("input-case-out-pin").value;
    console.log(caseOut, PinNumber);

    if (PinNumber === "1234") {
      console.log("Pin is correct, money is reducing");
      const currentBalance =
        document.getElementById("account-balance").innerText;
      const balanceNumber = parseFloat(currentBalance) - parseFloat(caseOut);
      document.getElementById("account-balance").innerText = balanceNumber;
    } else {
      alert("incorrect Pin");
    }
  });
