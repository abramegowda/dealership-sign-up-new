$(document).ready(function($) {
  $(".submit-btn").mouseenter(function() {
    $(".submit-btn img").addClass("bounce");
  });

  $(".submit-btn").mouseleave(function() {
    $(".submit-btn img").removeClass("bounce");
  });
});
