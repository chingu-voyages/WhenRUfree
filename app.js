const form = document.getElementById('loginForm')

function check(form) {
  if (
    form.email.value == '123@xyz.com' &&
    form.password.value == 'toucans31!'
  ) {
    window.open('about.html')
  } else {
    alert(
      'There is something wrong with your password/email.  Click the cancel button to try again'
    )
  }
}
