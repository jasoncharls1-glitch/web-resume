$(document).ready(function () {

  // Toggle Skills
  $("#btnToggle").click(function () {
    $("#skillsBox").slideToggle();

    $(this).text(
      $(this).text() === "Hide" ? "Show" : "Hide"
    );
  });

  // Add Project (with Enter support)
  function addProject() {
    let value = $("#projectInput").val().trim();

    if (value === "") return;

    $("#projectsBox").append(
      `<div class="item">${value} <span class="remove">✖</span></div>`
    );

    $("#projectInput").val("");
  }

  $("#btnAdd").click(addProject);

  $("#projectInput").keypress(function (e) {
    if (e.which === 13) {
      addProject();
    }
  });

  // Remove Project (dynamic elements)
  $("#projectsBox").on("click", ".remove", function () {
    $(this).parent().fadeOut(300, function () {
      $(this).remove();
    });
  });

  // Form Validation
  $("#contactForm").submit(function (e) {
    e.preventDefault();

    let name = $("#userName").val().trim();
    let email = $("#userEmail").val().trim();
    let msg = $("#userMsg").val().trim();

    if (!name || !email || !msg) {
      $("#formMsg").text("Please complete all fields.");
      return;
    }

    if (!email.includes("@")) {
      $("#formMsg").text("Invalid email format.");
      return;
    }

    $("#formMsg").text("✔ Message sent!");
    $(this).trigger("reset");
  });

  // Smooth Scroll (safe version)
  $(".menu a").click(function (e) {
    e.preventDefault();

    let target = $(this.hash);

    if (target.length) {
      $("html, body").animate({
        scrollTop: target.offset().top - 10
      }, 500);
    }
  });

  // Auto Year
  $("#year").text(new Date().getFullYear());

});