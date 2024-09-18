// show the case out form
document
  .getElementById("btn-show-case-out")
  .addEventListener("click", function () {
    document.getElementById("case-out-form").classList.remove("hidden");
    document.getElementById("add-money-form").classList.add("hidden");
  });

document
  .getElementById("btn-show-add-money")
  .addEventListener("click", function () {
    document.getElementById("add-money-form").classList.remove("hidden");
    document.getElementById("case-out-form").classList.add("hidden");
  });
