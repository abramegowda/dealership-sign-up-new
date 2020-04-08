window.onload = function() {
  document.getElementById("landing-submit").classList.add("not-active");
  document
    .getElementById("landing-submit")
    .childNodes[1].classList.add("arrow-inactive");
  document.getElementById("landing-submit").setAttribute("disabled", true);

  var isReviewCompleted = localStorage.getItem("review");
  var isMSASigned = localStorage.getItem("msa");
  if ((isReviewCompleted === 'true') && (isMSASigned === 'true')) {
    document.getElementById("landing-submit").classList.remove("not-active");
    document
      .getElementById("landing-submit")
      .childNodes[1].classList.remove("arrow-inactive");
    document.getElementById("landing-submit").removeAttribute("disabled");
    document
      .getElementById("form")
      .setAttribute("action", "../Thank-you/thank-you-page.html");
  } else {
    document.getElementById("landing-submit").classList.add("not-active");
    document
      .getElementById("landing-submit")
      .childNodes[1].classList.add("arrow-inactive");
    document.getElementById("landing-submit").setAttribute("disabled", true);
    document.getElementById("form").removeAttribute("action");
  }
};
