$(document).ready(function($) {
  $(".submit-btn").mouseenter(function() {
    $(".submit-btn img").addClass("bounce");
  });

  $(".submit-btn").mouseleave(function() {
    $(".submit-btn img").removeClass("bounce");
  });

  $("#landing-submit").addClass("not-active");
  $(".button-div a#landing-submit img").addClass("arrow-inactive");
  $("#landing-submit").attr("disabled", true);
});

var count = 0;
var reviewApprove = false;
var msaSigned = false;
function updateStatus(id) {
  console.log(id, count);
  if (!reviewApprove && (id === "review")) {
    count++;
    reviewApprove = true;
  }
  if (!msaSigned && (id === "msa")) {
    count++;
    msaSigned = true;
  }
  if (count === 2) {
    document.getElementById('landing-submit').classList.remove('not-active');
    document.getElementById('landing-submit').childNodes[1].classList.remove('arrow-inactive');
    document.getElementById('landing-submit').setAttribute("href", "../Thank-you/thank-you-page.html");
    document.getElementById('landing-submit').setAttribute("disabled", false);
  }
}
