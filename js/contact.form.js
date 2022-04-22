$("#contact-form").submit(function (event) {
  // cancels the form submission
  event.preventDefault();

  // Initiate Variables With Form Content
  var name = $("#name").val();
  var email = $("#email").val();
  var subject = $("#subject").val();
  var message = $("#comments").val();

  $("#contact-us-button").attr("disabled", true);
  $("#contact-us-button").html(
    "<i class='fa fa-spinner fa-spin'></i> Sending message please wait.."
  );

  $.ajax({
    type: "POST",
    url: "https://random-apis23.herokuapp.com/sendEmail",
    data:
      "name=" +
      name +
      "&email=" +
      email +
      "&message=" +
      message +
      "&subject=" +
      subject,
    success: function (data) {
      $("#contact-form")[0].reset();
      $("#contact-us-button").attr("disabled", false);
      $("#contact-us-button").html("Send Message");

      $("#success-contact-form").attr(
        "style",
        "color: green;position: absolute; font-size: larger"
      );
      $("#success-contact-form").html(
        "<i class='fa fa-check-circle'></i> Message Submitted!"
      );
      $("#success-contact-form").fadeIn("slow");
      $("#success-contact-form").delay(4000).fadeOut("slow");
    },
    error: function (data) {
      console.log("Mail sent Error for--->", data);
      $("#contact-form")[0].reset();
      $("#contact-us-button").attr("disabled", false);
      $("#contact-us-button").html("Send Message");

      $("#success-contact-form").attr(
        "style",
        "color: red;position: absolute; font-size: larger"
      );
      $("#success-contact-form").html(
        "<i class='far fa-times-circle'></i> Please try again,<br>error occurred!"
      );
      $("#success-contact-form").fadeIn("slow");
      $("#success-contact-form").delay(4000).fadeOut("slow");
    },
  });
});
