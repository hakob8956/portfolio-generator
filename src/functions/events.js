const events = {
  addListenerForModal() {
    $(".modal-thumbnail-image").click(function () {
      var content = document.getElementById("modal-desc-body");
      var title = document.getElementById("modal-title");
      var projectDesc = this.getAttribute("project-desc");
      var projectTitle = this.getAttribute("project-title");

      title.innerHTML = projectTitle;
      content.innerHTML = projectDesc;

      $("#modal-desc").modal("show");
    });
  },
  addCollapseListeners() {
    $(".collapse").on("shown.bs.collapse", function () {
      $(this)
        .parent()
        .find(".glyphicon")
        .removeClass("glyphicon-triangle-right")
        .addClass("glyphicon-triangle-bottom");
    });

    $(".collapse").on("hidden.bs.collapse", function () {
      $(this)
        .parent()
        .find(".glyphicon")
        .removeClass("glyphicon-triangle-bottom")
        .addClass("glyphicon-triangle-right");
    });
  },
};
export { events };
