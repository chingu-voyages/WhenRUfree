const form = document.getElementById("loginForm");
const calendar = document.getElementById("");

function check(form) {
  if (
    form.email.value == "123@xyz.com" &&
    form.password.value == "toucans31!"
  ) {
    window.open("about.html");
    console.log(form.email.value);
  } else {
    alert(
      "There is something wrong with your password/email.  Click the cancel button to try again"
    );
  }
}
