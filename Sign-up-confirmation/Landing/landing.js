window.onload = function() {
  disableSubmitButton();

  var isReviewCompleted = localStorage.getItem("review");
  var isMSASigned = localStorage.getItem("msa");
  if (isReviewCompleted === "true" && isMSASigned === "true") {
    enableSubmitButton();
  } else {
    disableSubmitButton();
  }
};

function disableSubmitButton() {
  document.getElementById("landing-submit").classList.add("not-active");
  document
    .getElementById("landing-submit")
    .childNodes[1].setAttribute("src", "../images/arrow-right-disabled.png");
  document.getElementById("landing-submit").setAttribute("disabled", true);
}

function enableSubmitButton() {
  document.getElementById("landing-submit").classList.remove("not-active");
  document
    .getElementById("landing-submit")
    .childNodes[1].setAttribute("src", "../images/arrow-right.png");
  document.getElementById("landing-submit").removeAttribute("disabled");
  document
    .getElementById("form")
    .setAttribute("action", "../Thank-you/thank-you-page.html");
}
