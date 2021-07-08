const form = document.getElementById('loginForm')
// const calendar = document.getElementById('')
const days = document.querySelectorAll('.days_big')
const ctrlBtnPaolo = document.querySelector('.ctrlBtnPaolo')
const paoloAvail = document.querySelectorAll('.circPaolo')
const ctrlBtnHuda = document.querySelector('.ctrlBtnHuda')
const hudaAvail = document.querySelectorAll('.circHuda')
const ctrlBtnAshley = document.querySelector('.ctrlBtnAshley')
const ashleyAvail = document.querySelectorAll('.circAshley')
const ctrlBtnAmberdeen = document.querySelector('.ctrlBtnAmberdeen')
const amberdeenAvail = document.querySelectorAll('.circAmberdeen')

function check(form) {
  if (
    form.email.value == '123@xyz.com' &&
    form.password.value == 'toucans31!'
  ) {
    window.open('about.html')
    console.log(form.email.value)
  } else {
    alert(
      'There is something wrong with your password/email.  Click the cancel button to try again'
    )
  }
}

// days.forEach((day) => {
//   console.log(day.innerHTML)
// })

ctrlBtnPaolo.addEventListener('click', () => {
  paoloAvail.forEach((day) => {
    day.classList.toggle('circHidePaolo')
  })
})

ctrlBtnHuda.addEventListener('click', () => {
  hudaAvail.forEach((day) => {
    day.classList.toggle('circHideHuda')
  })
})

ctrlBtnAshley.addEventListener('click', () => {
  ashleyAvail.forEach((day) => {
    day.classList.toggle('circHideAshley')
  })
})

ctrlBtnAmberdeen.addEventListener('click', () => {
  amberdeenAvail.forEach((day) => {
    day.classList.toggle('circHideAmberdeen')
  })
})
