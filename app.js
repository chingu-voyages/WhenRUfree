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
const monthSel = document.querySelector('.monthSel')
const offMonthList = document.getElementsByClassName('days_big_off_month')

// login functionality 👇
function check(form) {
  if (
    form.email.value == 'Huda@whenrufree.com' &&
    form.password.value == 'toucans31!'
  ) {
    window.open('about.html')
    // console.log(form.email.value)
  } else if (
    form.email.value == 'Ashley@whenrufree.com' &&
    form.password.value == 'toucans31!'
  ) {
    window.open('about.html')
  } else if (
    form.email.value == 'Ambareen@whenrufree.com' &&
    form.password.value == 'toucans31!'
  ) {
    window.open('about.html')
  } else if (
    form.email.value == 'Paolo@whenrufree.com' &&
    form.password.value == 'toucans31!'
  ) {
    window.open('about.html')
  } else if (
    form.email.value == 'guest@whenrufree.com' &&
    form.password.value == 'guest123'
  ) {
  } else {
    alert(
      'There is something wrong with your password/email.  Click the cancel button to try again'
    )
  }
}

// days.forEach((day) => {
//   console.log(day.innerHTML)
// })

// function clearMonth() {
//   offMonthList.forEach((e) => {
//     e.classList.remove('days_big_off_month')
//   })
// }

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

monthSel.addEventListener('change', () => {
  if (monthSel.value === 'January') {
    document.querySelector('#d1').innerHTML = '27'
    document
      .getElementById('d1')
      .parentElement.classList.add('days_big_off_month')

    document.querySelector('#d2').innerHTML = '28'
    document
      .getElementById('d2')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d3').innerHTML = '29'
    document
      .getElementById('d3')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d4').innerHTML = '30'
    document
      .getElementById('d4')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d5').innerHTML = '31'
    document
      .getElementById('d5')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d6').innerHTML = '1'
    document.querySelector('#d7').innerHTML = '2'
    document.querySelector('#d8').innerHTML = '3'
    document.querySelector('#d9').innerHTML = '4'
    document.querySelector('#d10').innerHTML = '5'
    document.querySelector('#d11').innerHTML = '6'
    document.querySelector('#d12').innerHTML = '7'
    document.querySelector('#d13').innerHTML = '8'
    document.querySelector('#d14').innerHTML = '9'
    document.querySelector('#d15').innerHTML = '10'
    document.querySelector('#d16').innerHTML = '11'
    document.querySelector('#d17').innerHTML = '12'
    document.querySelector('#d18').innerHTML = '13'
    document.querySelector('#d19').innerHTML = '14'
    document.querySelector('#d20').innerHTML = '15'
    document.querySelector('#d21').innerHTML = '16'
    document.querySelector('#d22').innerHTML = '17'
    document.querySelector('#d23').innerHTML = '18'
    document.querySelector('#d24').innerHTML = '19'
    document.querySelector('#d25').innerHTML = '20'
    document.querySelector('#d26').innerHTML = '21'
    document.querySelector('#d27').innerHTML = '22'
    document.querySelector('#d28').innerHTML = '23'
    document.querySelector('#d29').innerHTML = '24'
    document.querySelector('#d30').innerHTML = '25'
    document.querySelector('#d31').innerHTML = '26'
    document.querySelector('#d32').innerHTML = '27'
    document.querySelector('#d33').innerHTML = '28'
    document.querySelector('#d34').innerHTML = '29'
    document.querySelector('#d35').innerHTML = '30'
    document.querySelector('#d36').innerHTML = '31'
    document.querySelector('#d37').innerHTML = '1'
    document
      .getElementById('d37')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d38').innerHTML = '2'
    document
      .getElementById('d38')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d39').innerHTML = '3'
    document
      .getElementById('d39')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d40').innerHTML = '4'
    document
      .getElementById('d40')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d41').innerHTML = '5'
    document
      .getElementById('d41')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d42').innerHTML = '6'
    document
      .getElementById('d42')
      .parentElement.classList.add('days_big_off_month')
  } else if (monthSel.value === 'February') {
    document.querySelector('#d1').innerHTML = '31'
    document
      .getElementById('d1')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d2').innerHTML = '1'
    document.querySelector('#d3').innerHTML = '2'
    document.querySelector('#d4').innerHTML = '3'
    document.querySelector('#d5').innerHTML = '4'
    document.querySelector('#d6').innerHTML = '5'
    document.querySelector('#d7').innerHTML = '6'
    document.querySelector('#d8').innerHTML = '7'
    document.querySelector('#d9').innerHTML = '8'
    document.querySelector('#d10').innerHTML = '9'
    document.querySelector('#d11').innerHTML = '10'
    document.querySelector('#d12').innerHTML = '11'
    document.querySelector('#d13').innerHTML = '12'
    document.querySelector('#d14').innerHTML = '13'
    document.querySelector('#d15').innerHTML = '14'
    document.querySelector('#d16').innerHTML = '15'
    document.querySelector('#d17').innerHTML = '16'
    document.querySelector('#d18').innerHTML = '17'
    document.querySelector('#d19').innerHTML = '18'
    document.querySelector('#d20').innerHTML = '19'
    document.querySelector('#d21').innerHTML = '20'
    document.querySelector('#d22').innerHTML = '21'
    document.querySelector('#d23').innerHTML = '22'
    document.querySelector('#d24').innerHTML = '23'
    document.querySelector('#d25').innerHTML = '24'
    document.querySelector('#d26').innerHTML = '25'
    document.querySelector('#d27').innerHTML = '26'
    document.querySelector('#d28').innerHTML = '27'
    document.querySelector('#d29').innerHTML = '28'
    document.querySelector('#d30').innerHTML = '1'
    document
      .getElementById('d30')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d31').innerHTML = '2'
    document
      .getElementById('d31')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d32').innerHTML = '3'
    document
      .getElementById('d32')
      .parentElement.classList.add('days_big_off_month')

    document.querySelector('#d33').innerHTML = '4'
    document
      .getElementById('d33')
      .parentElement.classList.add('days_big_off_month')

    document.querySelector('#d34').innerHTML = '5'
    document
      .getElementById('d34')
      .parentElement.classList.add('days_big_off_month')

    document.querySelector('#d35').innerHTML = '6'
    document
      .getElementById('d35')
      .parentElement.classList.add('days_big_off_month')

    document.querySelector('#d36').innerHTML = '7'
    document
      .getElementById('d36')
      .parentElement.classList.add('days_big_off_month')

    document.querySelector('#d37').innerHTML = '8'
    document
      .getElementById('d37')
      .parentElement.classList.add('days_big_off_month')

    document.querySelector('#d38').innerHTML = '9'
    document
      .getElementById('d38')
      .parentElement.classList.add('days_big_off_month')

    document.querySelector('#d39').innerHTML = '10'
    document
      .getElementById('d39')
      .parentElement.classList.add('days_big_off_month')

    document.querySelector('#d40').innerHTML = '11'
    document
      .getElementById('d40')
      .parentElement.classList.add('days_big_off_month')

    document.querySelector('#d41').innerHTML = '12'
    document
      .getElementById('d41')
      .parentElement.classList.add('days_big_off_month')

    document.querySelector('#d42').innerHTML = '13'
    document
      .getElementById('d42')
      .parentElement.classList.add('days_big_off_month')
  } else if (monthSel.value === 'March') {
    document.querySelector('#d1').innerHTML = '28'
    document
      .getElementById('d1')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d2').innerHTML = '1'
    document.querySelector('#d3').innerHTML = '2'
    document.querySelector('#d4').innerHTML = '3'
    document.querySelector('#d5').innerHTML = '4'
    document.querySelector('#d6').innerHTML = '5'
    document.querySelector('#d7').innerHTML = '6'
    document.querySelector('#d8').innerHTML = '7'
    document.querySelector('#d9').innerHTML = '8'
    document.querySelector('#d10').innerHTML = '9'
    document.querySelector('#d11').innerHTML = '10'
    document.querySelector('#d12').innerHTML = '11'
    document.querySelector('#d13').innerHTML = '12'
    document.querySelector('#d14').innerHTML = '13'
    document.querySelector('#d15').innerHTML = '14'
    document.querySelector('#d16').innerHTML = '15'
    document.querySelector('#d17').innerHTML = '16'
    document.querySelector('#d18').innerHTML = '17'
    document.querySelector('#d19').innerHTML = '18'
    document.querySelector('#d20').innerHTML = '19'
    document.querySelector('#d21').innerHTML = '20'
    document.querySelector('#d22').innerHTML = '21'
    document.querySelector('#d23').innerHTML = '22'
    document.querySelector('#d24').innerHTML = '23'
    document.querySelector('#d25').innerHTML = '24'
    document.querySelector('#d26').innerHTML = '25'
    document.querySelector('#d27').innerHTML = '26'
    document.querySelector('#d28').innerHTML = '27'
    document.querySelector('#d29').innerHTML = '28'
    document.querySelector('#d30').innerHTML = '29'
    document.querySelector('#d31').innerHTML = '30'
    document.querySelector('#d32').innerHTML = '31'
    document
      .getElementById('d32')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d33').innerHTML = '1'
    document
      .getElementById('d33')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d34').innerHTML = '2'
    document
      .getElementById('d34')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d35').innerHTML = '3'
    document
      .getElementById('d35')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d36').innerHTML = '4'
    document
      .getElementById('d36')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d37').innerHTML = '5'
    document
      .getElementById('d37')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d38').innerHTML = '6'
    document
      .getElementById('d38')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d39').innerHTML = '7'
    document
      .getElementById('d39')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d40').innerHTML = '8'
    document
      .getElementById('d40')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d41').innerHTML = '9'
    document
      .getElementById('d41')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d42').innerHTML = '10'
    document
      .getElementById('d42')
      .parentElement.classList.add('days_big_off_month')
  } else if (monthSel.value === 'April') {
    document.querySelector('#d1').innerHTML = '28'
    document
      .getElementById('d1')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d2').innerHTML = '29'
    document
      .getElementById('d2')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d3').innerHTML = '30'
    document
      .getElementById('d3')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d4').innerHTML = '31'
    document
      .getElementById('d4')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d5').innerHTML = '1'
    document.querySelector('#d6').innerHTML = '2'
    document.querySelector('#d7').innerHTML = '3'
    document.querySelector('#d8').innerHTML = '4'
    document.querySelector('#d9').innerHTML = '5'
    document.querySelector('#d10').innerHTML = '6'
    document.querySelector('#d11').innerHTML = '7'
    document.querySelector('#d12').innerHTML = '8'
    document.querySelector('#d13').innerHTML = '9'
    document.querySelector('#d14').innerHTML = '10'
    document.querySelector('#d15').innerHTML = '11'
    document.querySelector('#d16').innerHTML = '12'
    document.querySelector('#d17').innerHTML = '13'
    document.querySelector('#d18').innerHTML = '14'
    document.querySelector('#d19').innerHTML = '15'
    document.querySelector('#d20').innerHTML = '16'
    document.querySelector('#d21').innerHTML = '17'
    document.querySelector('#d22').innerHTML = '18'
    document.querySelector('#d23').innerHTML = '19'
    document.querySelector('#d24').innerHTML = '20'
    document.querySelector('#d25').innerHTML = '21'
    document.querySelector('#d26').innerHTML = '22'
    document.querySelector('#d27').innerHTML = '23'
    document.querySelector('#d28').innerHTML = '24'
    document.querySelector('#d29').innerHTML = '25'
    document.querySelector('#d30').innerHTML = '26'
    document.querySelector('#d31').innerHTML = '27'
    document.querySelector('#d32').innerHTML = '28'
    document.querySelector('#d33').innerHTML = '29'
    document.querySelector('#d34').innerHTML = '30'

    document.querySelector('#d35').innerHTML = '1'
    document
      .getElementById('d35')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d36').innerHTML = '2'
    document
      .getElementById('d36')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d37').innerHTML = '3'
    document
      .getElementById('d37')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d38').innerHTML = '4'
    document
      .getElementById('d38')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d39').innerHTML = '5'
    document
      .getElementById('d39')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d40').innerHTML = '6'
    document
      .getElementById('d40')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d41').innerHTML = '7'
    document
      .getElementById('d41')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d42').innerHTML = '8'
    document
      .getElementById('d42')
      .parentElement.classList.add('days_big_off_month')
  } else if (monthSel.value === 'May') {
    document.querySelector('#d1').innerHTML = '25'
    document
      .getElementById('d1')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d2').innerHTML = '26'
    document
      .getElementById('d2')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d3').innerHTML = '27'
    document
      .getElementById('d3')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d4').innerHTML = '28'
    document
      .getElementById('d4')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d5').innerHTML = '29'
    document
      .getElementById('d5')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d6').innerHTML = '30'
    document
      .getElementById('d6')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d7').innerHTML = '1'
    document.querySelector('#d8').innerHTML = '2'
    document.querySelector('#d9').innerHTML = '3'
    document.querySelector('#d10').innerHTML = '4'
    document.querySelector('#d11').innerHTML = '5'
    document.querySelector('#d12').innerHTML = '6'
    document.querySelector('#d13').innerHTML = '7'
    document.querySelector('#d14').innerHTML = '8'
    document.querySelector('#d15').innerHTML = '9'
    document.querySelector('#d16').innerHTML = '10'
    document.querySelector('#d17').innerHTML = '11'
    document.querySelector('#d18').innerHTML = '12'
    document.querySelector('#d19').innerHTML = '13'
    document.querySelector('#d20').innerHTML = '14'
    document.querySelector('#d21').innerHTML = '15'
    document.querySelector('#d22').innerHTML = '16'
    document.querySelector('#d23').innerHTML = '17'
    document.querySelector('#d24').innerHTML = '18'
    document.querySelector('#d25').innerHTML = '19'
    document.querySelector('#d26').innerHTML = '20'
    document.querySelector('#d27').innerHTML = '21'
    document.querySelector('#d28').innerHTML = '22'
    document.querySelector('#d29').innerHTML = '23'
    document.querySelector('#d30').innerHTML = '24'
    document.querySelector('#d31').innerHTML = '25'
    document.querySelector('#d32').innerHTML = '26'
    document.querySelector('#d33').innerHTML = '27'
    document.querySelector('#d34').innerHTML = '28'
    document.querySelector('#d35').innerHTML = '29'
    document.querySelector('#d36').innerHTML = '30'
    document.querySelector('#d37').innerHTML = '31'
    document.querySelector('#d38').innerHTML = '1'
    document
      .getElementById('d38')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d39').innerHTML = '2'
    document
      .getElementById('d39')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d40').innerHTML = '3'
    document
      .getElementById('d40')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d41').innerHTML = '4'
    document
      .getElementById('d41')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d42').innerHTML = '5'
    document
      .getElementById('d42')
      .parentElement.classList.add('days_big_off_month')
  } else if (monthSel.value === 'June') {
    document.querySelector('#d1').innerHTML = '30'
    document
      .getElementById('d1')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d2').innerHTML = '31'
    document
      .getElementById('d2')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d3').innerHTML = '1'
    document.querySelector('#d4').innerHTML = '2'
    document.querySelector('#d5').innerHTML = '3'
    document.querySelector('#d6').innerHTML = '4'
    document.querySelector('#d7').innerHTML = '5'
    document.querySelector('#d8').innerHTML = '6'
    document.querySelector('#d9').innerHTML = '7'
    document.querySelector('#d10').innerHTML = '8'
    document.querySelector('#d11').innerHTML = '9'
    document.querySelector('#d12').innerHTML = '10'
    document.querySelector('#d13').innerHTML = '11'
    document.querySelector('#d14').innerHTML = '12'
    document.querySelector('#d15').innerHTML = '13'
    document.querySelector('#d16').innerHTML = '14'
    document.querySelector('#d17').innerHTML = '15'
    document.querySelector('#d18').innerHTML = '16'
    document.querySelector('#d19').innerHTML = '17'
    document.querySelector('#d20').innerHTML = '18'
    document.querySelector('#d21').innerHTML = '19'
    document.querySelector('#d22').innerHTML = '20'
    document.querySelector('#d23').innerHTML = '21'
    document.querySelector('#d24').innerHTML = '22'
    document.querySelector('#d25').innerHTML = '23'
    document.querySelector('#d26').innerHTML = '24'
    document.querySelector('#d27').innerHTML = '25'
    document.querySelector('#d28').innerHTML = '26'
    document.querySelector('#d29').innerHTML = '27'
    document.querySelector('#d30').innerHTML = '28'
    document.querySelector('#d31').innerHTML = '29'
    document.querySelector('#d32').innerHTML = '30'
    document.querySelector('#d33').innerHTML = '1'
    document
      .getElementById('d33')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d34').innerHTML = '2'
    document
      .getElementById('d34')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d35').innerHTML = '3'
    document
      .getElementById('d35')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d36').innerHTML = '4'
    document
      .getElementById('d36')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d37').innerHTML = '5'
    document
      .getElementById('d37')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d38').innerHTML = '6'
    document
      .getElementById('d38')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d39').innerHTML = '7'
    document
      .getElementById('d39')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d40').innerHTML = '8'
    document
      .getElementById('d40')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d41').innerHTML = '9'
    document
      .getElementById('d41')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d42').innerHTML = '10'
    document
      .getElementById('d42')
      .parentElement.classList.add('days_big_off_month')
  } else if (monthSel.value === 'July') {
    document.querySelector('#d1').innerHTML = '27'
    document
      .getElementById('d1')
      .parentElement.classList.add('days_big_off_month')

    document.querySelector('#d2').innerHTML = '28'
    document
      .getElementById('d2')
      .parentElement.classList.add('days_big_off_month')

    document.querySelector('#d3').innerHTML = '29'
    document
      .getElementById('d3')
      .parentElement.classList.add('days_big_off_month')

    document.querySelector('#d4').innerHTML = '30'
    document
      .getElementById('d4')
      .parentElement.classList.add('days_big_off_month')

    document.querySelector('#d5').innerHTML = '1'
    document.querySelector('#d6').innerHTML = '2'
    document.querySelector('#d7').innerHTML = '3'
    document.querySelector('#d8').innerHTML = '4'
    document.querySelector('#d9').innerHTML = '5'
    document.querySelector('#d10').innerHTML = '6'
    document.querySelector('#d11').innerHTML = '7'
    document.querySelector('#d12').innerHTML = '8'
    document.querySelector('#d13').innerHTML = '9'
    document.querySelector('#d14').innerHTML = '10'
    document.querySelector('#d15').innerHTML = '11'
    document.querySelector('#d16').innerHTML = '12'
    document.querySelector('#d17').innerHTML = '13'
    document.querySelector('#d18').innerHTML = '14'
    document.querySelector('#d19').innerHTML = '15'
    document.querySelector('#d20').innerHTML = '16'
    document.querySelector('#d21').innerHTML = '17'
    document.querySelector('#d22').innerHTML = '18'
    document.querySelector('#d23').innerHTML = '19'
    document.querySelector('#d24').innerHTML = '20'
    document.querySelector('#d25').innerHTML = '21'
    document.querySelector('#d26').innerHTML = '22'
    document.querySelector('#d27').innerHTML = '23'
    document.querySelector('#d28').innerHTML = '24'
    document.querySelector('#d29').innerHTML = '25'
    document.querySelector('#d30').innerHTML = '26'
    document.querySelector('#d31').innerHTML = '27'
    document.querySelector('#d32').innerHTML = '28'
    document.querySelector('#d33').innerHTML = '29'
    document.querySelector('#d34').innerHTML = '30'
    document.querySelector('#d35').innerHTML = '31'
    document.querySelector('#d36').innerHTML = '1'
    document
      .getElementById('d36')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d37').innerHTML = '2'
    document
      .getElementById('d37')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d38').innerHTML = '3'
    document
      .getElementById('d38')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d39').innerHTML = '4'
    document
      .getElementById('d39')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d40').innerHTML = '5'
    document
      .getElementById('d40')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d41').innerHTML = '6'
    document
      .getElementById('d41')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d42').innerHTML = '7'
    document
      .getElementById('d42')
      .parentElement.classList.add('days_big_off_month')
  } else if (monthSel.value === 'August') {
    document.querySelector('#d1').innerHTML = '1'

    document.querySelector('#d2').innerHTML = '2'

    document.querySelector('#d3').innerHTML = '3'

    document.querySelector('#d4').innerHTML = '4'

    document.querySelector('#d5').innerHTML = '5'

    document.querySelector('#d6').innerHTML = '6'

    document.querySelector('#d7').innerHTML = '7'

    document.querySelector('#d8').innerHTML = '8'
    document.querySelector('#d9').innerHTML = '9'
    document.querySelector('#d10').innerHTML = '10'
    document.querySelector('#d11').innerHTML = '11'
    document.querySelector('#d12').innerHTML = '12'
    document.querySelector('#d13').innerHTML = '13'
    document.querySelector('#d14').innerHTML = '14'
    document.querySelector('#d15').innerHTML = '15'
    document.querySelector('#d16').innerHTML = '16'
    document.querySelector('#d17').innerHTML = '17'
    document.querySelector('#d18').innerHTML = '18'
    document.querySelector('#d19').innerHTML = '19'
    document.querySelector('#d20').innerHTML = '20'
    document.querySelector('#d21').innerHTML = '21'
    document.querySelector('#d22').innerHTML = '22'
    document.querySelector('#d23').innerHTML = '23'
    document.querySelector('#d24').innerHTML = '24'
    document.querySelector('#d25').innerHTML = '25'
    document.querySelector('#d26').innerHTML = '26'
    document.querySelector('#d27').innerHTML = '27'
    document.querySelector('#d28').innerHTML = '28'
    document.querySelector('#d29').innerHTML = '29'
    document.querySelector('#d30').innerHTML = '30'
    document.querySelector('#d31').innerHTML = '31'
    document.querySelector('#d32').innerHTML = '1'
    document
      .getElementById('d32')
      .parentElement.classList.add('days_big_off_month')

    document.querySelector('#d33').innerHTML = '2'
    document
      .getElementById('d33')
      .parentElement.classList.add('days_big_off_month')

    document.querySelector('#d34').innerHTML = '3'
    document
      .getElementById('d34')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d35').innerHTML = '4'
    document
      .getElementById('d35')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d36').innerHTML = '5'
    document
      .getElementById('d35')
      .parentElement.classList.add('days_big_off_month')

    document.querySelector('#d37').innerHTML = '6'
    document
      .getElementById('d37')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d38').innerHTML = '7'
    document
      .getElementById('d38')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d39').innerHTML = '8'
    document
      .getElementById('d39')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d40').innerHTML = '9'
    document
      .getElementById('d40')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d41').innerHTML = '10'
    document
      .getElementById('d41')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d42').innerHTML = '11'
    document
      .getElementById('d42')
      .parentElement.classList.add('days_big_off_month')
  } else if (monthSel.value === 'September') {
    document.querySelector('#d1').innerHTML = '29'
    document
      .getElementById('d1')
      .parentElement.classList.add('days_big_off_month')

    document.querySelector('#d2').innerHTML = '30'
    document
      .getElementById('d2')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d3').innerHTML = '31'
    document
      .getElementById('d3')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d4').innerHTML = '1'
    document.querySelector('#d5').innerHTML = '2'
    document.querySelector('#d6').innerHTML = '3'
    document.querySelector('#d7').innerHTML = '4'
    document.querySelector('#d8').innerHTML = '5'
    document.querySelector('#d9').innerHTML = '6'
    document.querySelector('#d10').innerHTML = '7'
    document.querySelector('#d11').innerHTML = '8'
    document.querySelector('#d12').innerHTML = '9'
    document.querySelector('#d13').innerHTML = '10'
    document.querySelector('#d14').innerHTML = '11'
    document.querySelector('#d15').innerHTML = '12'
    document.querySelector('#d16').innerHTML = '13'
    document.querySelector('#d17').innerHTML = '14'
    document.querySelector('#d18').innerHTML = '15'
    document.querySelector('#d19').innerHTML = '16'
    document.querySelector('#d20').innerHTML = '17'
    document.querySelector('#d21').innerHTML = '18'
    document.querySelector('#d22').innerHTML = '19'
    document.querySelector('#d23').innerHTML = '20'
    document.querySelector('#d24').innerHTML = '21'
    document.querySelector('#d25').innerHTML = '22'
    document.querySelector('#d26').innerHTML = '23'
    document.querySelector('#d27').innerHTML = '24'
    document.querySelector('#d28').innerHTML = '25'
    document.querySelector('#d29').innerHTML = '26'
    document.querySelector('#d30').innerHTML = '27'
    document.querySelector('#d31').innerHTML = '28'
    document.querySelector('#d32').innerHTML = '29'
    document.querySelector('#d33').innerHTML = '30'
    document.querySelector('#d34').innerHTML = '1'
    document
      .getElementById('d34')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d35').innerHTML = '2'
    document
      .getElementById('d35')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d36').innerHTML = '3'
    document
      .getElementById('d36')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d37').innerHTML = '4'
    document
      .getElementById('d37')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d38').innerHTML = '5'
    document
      .getElementById('d38')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d39').innerHTML = '6'
    document
      .getElementById('d39')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d40').innerHTML = '7'
    document
      .getElementById('d40')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d41').innerHTML = '8'
    document
      .getElementById('d41')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d42').innerHTML = '9'
    document
      .getElementById('d42')
      .parentElement.classList.add('days_big_off_month')
  } else if (monthSel.value === 'October') {
    document.querySelector('#d1').innerHTML = '26'
    document
      .getElementById('d1')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d2').innerHTML = '27'
    document
      .getElementById('d2')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d3').innerHTML = '28'
    document
      .getElementById('d3')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d4').innerHTML = '29'
    document
      .getElementById('d4')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d5').innerHTML = '30'
    document
      .getElementById('d5')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d6').innerHTML = '1'
    document.querySelector('#d7').innerHTML = '2'
    document.querySelector('#d8').innerHTML = '3'
    document.querySelector('#d9').innerHTML = '4'
    document.querySelector('#d10').innerHTML = '5'
    document.querySelector('#d11').innerHTML = '6'
    document.querySelector('#d12').innerHTML = '7'
    document.querySelector('#d13').innerHTML = '8'
    document.querySelector('#d14').innerHTML = '9'
    document.querySelector('#d15').innerHTML = '10'
    document.querySelector('#d16').innerHTML = '11'
    document.querySelector('#d17').innerHTML = '12'
    document.querySelector('#d18').innerHTML = '13'
    document.querySelector('#d19').innerHTML = '14'
    document.querySelector('#d20').innerHTML = '15'
    document.querySelector('#d21').innerHTML = '16'
    document.querySelector('#d22').innerHTML = '17'
    document.querySelector('#d23').innerHTML = '18'
    document.querySelector('#d24').innerHTML = '19'
    document.querySelector('#d25').innerHTML = '20'
    document.querySelector('#d26').innerHTML = '21'
    document.querySelector('#d27').innerHTML = '22'
    document.querySelector('#d28').innerHTML = '23'
    document.querySelector('#d29').innerHTML = '24'
    document.querySelector('#d30').innerHTML = '25'
    document.querySelector('#d31').innerHTML = '26'
    document.querySelector('#d32').innerHTML = '27'
    document.querySelector('#d33').innerHTML = '28'
    document.querySelector('#d34').innerHTML = '29'
    document.querySelector('#d35').innerHTML = '30'
    document.querySelector('#d36').innerHTML = '31'
    document.querySelector('#d37').innerHTML = '1'
    document
      .getElementById('d37')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d38').innerHTML = '2'
    document
      .getElementById('d38')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d39').innerHTML = '3'
    document
      .getElementById('d39')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d40').innerHTML = '4'
    document
      .getElementById('d40')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d41').innerHTML = '5'
    document
      .getElementById('d41')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d42').innerHTML = '6'
    document
      .getElementById('d42')
      .parentElement.classList.add('days_big_off_month')
  } else if (monthSel.value === 'November') {
    document.querySelector('#d1').innerHTML = '31'
    document
      .getElementById('d1')
      .parentElement.classList.add('days_big_off_month')

    document.querySelector('#d2').innerHTML = '1'
    document.querySelector('#d3').innerHTML = '2'
    document.querySelector('#d4').innerHTML = '3'
    document.querySelector('#d5').innerHTML = '4'
    document.querySelector('#d6').innerHTML = '5'
    document.querySelector('#d7').innerHTML = '6'
    document.querySelector('#d8').innerHTML = '7'
    document.querySelector('#d9').innerHTML = '8'
    document.querySelector('#d10').innerHTML = '9'
    document.querySelector('#d11').innerHTML = '10'
    document.querySelector('#d12').innerHTML = '11'
    document.querySelector('#d13').innerHTML = '12'
    document.querySelector('#d14').innerHTML = '13'
    document.querySelector('#d15').innerHTML = '14'
    document.querySelector('#d16').innerHTML = '15'
    document.querySelector('#d17').innerHTML = '16'
    document.querySelector('#d18').innerHTML = '17'
    document.querySelector('#d19').innerHTML = '18'
    document.querySelector('#d20').innerHTML = '19'
    document.querySelector('#d21').innerHTML = '20'
    document.querySelector('#d22').innerHTML = '21'
    document.querySelector('#d23').innerHTML = '22'
    document.querySelector('#d24').innerHTML = '23'
    document.querySelector('#d25').innerHTML = '24'
    document.querySelector('#d26').innerHTML = '25'
    document.querySelector('#d27').innerHTML = '26'
    document.querySelector('#d28').innerHTML = '27'
    document.querySelector('#d29').innerHTML = '28'
    document.querySelector('#d30').innerHTML = '29'
    document.querySelector('#d31').innerHTML = '30'
    document.querySelector('#d32').innerHTML = '1'
    document
      .getElementById('d32')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d33').innerHTML = '2'
    document
      .getElementById('d33')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d34').innerHTML = '3'
    document
      .getElementById('d34')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d35').innerHTML = '4'
    document
      .getElementById('d35')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d36').innerHTML = '5'
    document
      .getElementById('d36')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d37').innerHTML = '6'
    document
      .getElementById('d37')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d38').innerHTML = '7'
    document
      .getElementById('d38')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d39').innerHTML = '8'
    document
      .getElementById('d39')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d40').innerHTML = '9'
    document
      .getElementById('d40')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d41').innerHTML = '10'
    document
      .getElementById('d41')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d42').innerHTML = '11'
    document
      .getElementById('d42')
      .parentElement.classList.add('days_big_off_month')
  } else if (monthSel.value === 'December') {
    document.querySelector('#d1').innerHTML = '28'
    document
      .getElementById('d1')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d2').innerHTML = '29'
    document
      .getElementById('d2')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d3').innerHTML = '30'
    document
      .getElementById('d3')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d4').innerHTML = '1'
    document.querySelector('#d5').innerHTML = '2'
    document.querySelector('#d6').innerHTML = '3'
    document.querySelector('#d7').innerHTML = '4'
    document.querySelector('#d8').innerHTML = '5'
    document.querySelector('#d9').innerHTML = '6'
    document.querySelector('#d10').innerHTML = '7'
    document.querySelector('#d11').innerHTML = '8'
    document.querySelector('#d12').innerHTML = '9'
    document.querySelector('#d13').innerHTML = '10'
    document.querySelector('#d14').innerHTML = '11'
    document.querySelector('#d15').innerHTML = '12'
    document.querySelector('#d16').innerHTML = '13'
    document.querySelector('#d17').innerHTML = '14'
    document.querySelector('#d18').innerHTML = '15'
    document.querySelector('#d19').innerHTML = '16'
    document.querySelector('#d20').innerHTML = '17'
    document.querySelector('#d21').innerHTML = '18'
    document.querySelector('#d22').innerHTML = '19'
    document.querySelector('#d23').innerHTML = '20'
    document.querySelector('#d24').innerHTML = '21'
    document.querySelector('#d25').innerHTML = '22'
    document.querySelector('#d26').innerHTML = '23'
    document.querySelector('#d27').innerHTML = '24'
    document.querySelector('#d28').innerHTML = '25'
    document.querySelector('#d29').innerHTML = '26'
    document.querySelector('#d30').innerHTML = '27'
    document.querySelector('#d31').innerHTML = '28'
    document.querySelector('#d32').innerHTML = '29'
    document.querySelector('#d33').innerHTML = '30'
    document.querySelector('#d34').innerHTML = '31'
    document.querySelector('#d35').innerHTML = ''
    document
      .getElementById('d35')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d36').innerHTML = ''
    document
      .getElementById('d36')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d37').innerHTML = ''
    document
      .getElementById('d37')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d38').innerHTML = ''
    document
      .getElementById('d38')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d39').innerHTML = ''
    document
      .getElementById('d39')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d40').innerHTML = ''
    document
      .getElementById('d40')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d41').innerHTML = ''
    document
      .getElementById('d41')
      .parentElement.classList.add('days_big_off_month')
    document.querySelector('#d42').innerHTML = ''
    document
      .getElementById('d42')
      .parentElement.classList.add('days_big_off_month')
  }
})
