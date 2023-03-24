function downloadResume() {
  $("#right-toolbar").hide();
  $("[id^=highlightDiv]").collapse("show");
  window.print();
  $("#right-toolbar").show();
  $("[id^=highlightDiv]").collapse("hide");
}
