/**
 *
 *
 */
const btnAddMoney = document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const inputAddMoney = document.getElementById("input-add-money").value;
    const inputPin = document.getElementById("input-pin").value;
    if (inputPin === "1234") {
      console.log("adding money to your account");

      const accountBalance =
        document.getElementById("account-balance").innerText;
      const newBalance = parseFloat(accountBalance) + parseFloat(inputAddMoney);
      /**
       * const balanceNumber = parseFloat(inputAddMoney);
       * const currentBalance = parseFloat(accountBalance);
       * const newBalance = balanceNumber + currentBalance;
       */
      document.getElementById("account-balance").innerText = newBalance;
    } else {
      alert("Invalid Pin");
    }
  });
