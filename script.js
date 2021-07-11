function myFunction_3() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function myFunction_1() {
  if (document.getElementById("calender")) {
    if (document.getElementById("calender").style.display == "none") {
      document.getElementById("calender").style.display = "block";
      document.getElementById("back").style.display = "none";
    } else {
      document.getElementById("calender").style.display = "none";
      document.getElementById("back").style.display = "block";
    }
  }
}

function myFunction() {
  if (document.getElementById("big-calender")) {
    if (document.getElementById("big-calender").style.display == "none") {
      document.getElementById("big-calender").style.display = "block";
      document.getElementById("big-back").style.display = "none";
    } else {
      document.getElementById("big-calender").style.display = "none";
      document.getElementById("big-back").style.display = "block";
    }
  }
}

function closeFunction_1() {
  document.getElementById("back").style.display = "none";
  document.getElementById("calender").style.display = "block";
}

function closeFunction() {
  document.getElementById("big-back").style.display = "none";
  document.getElementById("big-calender").style.display = "block";
}
