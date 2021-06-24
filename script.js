function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function myFunction() {
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

function closeFunction() {
  document.getElementById("back").style.display = "none";
  document.getElementById("calender").style.display = "block";
}
/* flip animation toggle
Dismiss button returns to calender */
