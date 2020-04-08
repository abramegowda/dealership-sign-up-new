$(document).ready(function($) {
  $(".submit-btn").addClass("not-active");
  $(".button-div .submit-btn img").attr('src', '../../images/arrow-right-disabled.png');
  $(".submit-btn").attr("disabled", true);

  $("#datepicker")
    .dateRangePicker({
      singleMonth: true,
      showShortcuts: false,
      showTopbar: false,
      inline: true,
      alwaysOpen: true,
      container: "#date-range-container",
      startOfWeek: "monday",
      hoveringTooltip: false,
      startDate: moment.now(),
    })
    .bind("datepicker-change", function(event, obj) {
      if ($("#datepicker").val().length > 0) {
        $(".submit-btn").removeClass("not-active");
        $(".button-div .submit-btn img").attr('src', '../../images/arrow-right.png');
        $(".submit-btn").attr("disabled", false);
      }
    });

  $(".reset").click(function() {
    $("#datepicker")
      .data("dateRangePicker")
      .clear();
    $(".submit-btn").addClass("not-active");
    $(".button-div .submit-btn img").attr('src', '../../images/arrow-right-disabled.png');
    $(".submit-btn").attr("disabled", true);
  });
});
