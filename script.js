var date1 = document.querySelectorAll(".lastdate")[0].innerHTML;
console.log(date1);
//unix current date
var unixdate1 = Date.parse(date1) / 1000;
console.log(unixdate1);

var date2 = document.querySelectorAll(".lastdate")[1].innerHTML;
console.log(date2);
//unix current date
var unixdate2 = Date.parse(date2) / 1000;
console.log(unixdate2);
var date3 = document.querySelectorAll(".lastdate")[2].innerHTML;
console.log(date3);
//unix current date
var unixdate3 = Date.parse(date3) / 1000;
console.log(unixdate3);
var date4 = document.querySelectorAll(".lastdate")[3].innerHTML;
console.log(date4);
var date5 = document.querySelectorAll(".lastdate")[4].innerHTML;
console.log(date5);
//unix current date
// var unixdate3 = Date.parse(date3) / 1000;
// console.log(unixdate3);

// console.log(new Date(lastdate).valueOf());
var currentdate = new Date().toLocaleDateString();
console.log("current date" + currentdate);
//unix current date
var unixcurrent = Date.parse(currentdate) / 1000;
console.log(unixcurrent);

// var lastdate = [unixdate1, unixdate2, unixdate3];
// // d.push(unixdate1);
// for (i = 0; i <= lastdate.length; i++) {
//   console.log(lastdate[i]);
// }

// condition check using unixtimestamp
//row 1
// if (unixdate1 > unixcurrent) {
//   var status1 = (document.querySelector(".status1").innerHTML = "unpaid");
// } else if (unixdate1 == unixcurrent) {
//   var status1 = (document.querySelector(".status1").innerHTML = "unpaid");
// } else {
//   var status1 = (document.querySelector(".status1").innerHTML =
//     "pay date over");
// }
//row 2
// if (unixdate2 > unixcurrent) {
//   var status2 = (document.querySelector(".status2").innerHTML = "unpaid");
// } else if (unixdate2 == unixcurrent) {
//   var status2 = (document.querySelector(".status2").innerHTML = "unpaid");
// } else {
//   var status2 = (document.querySelector(".status2").innerHTML =
//     "pay date over");
// }
//row 3
// if (unixdate3 > unixcurrent) {
//   var status3 = (document.querySelector(".status3").innerHTML = "unpaid");
// } else if (unixdate3 == unixcurrent) {
//   var status3 = (document.querySelector(".status3").innerHTML = "unpaid");
// } else {
//   var status3 = (document.querySelector(".status3").innerHTML =
//     "pay date over");
// }
///-------------------------------------
// condition check using without unixtimestamp
//row1
if (date1 > currentdate) {
  var status1 = (document.querySelector(".status1").innerHTML = "Unpaid");
} else if (date1 == currentdate) {
  var status1 = (document.querySelector(".status1").innerHTML = "Unpaid");
} else {
  var status1 = (document.querySelector(".status1").innerHTML =
    "Pay date over");
}
document.querySelector(".status1").style.fontWeight = "bolder";
//row 2
if (date2 > currentdate) {
  var status2 = (document.querySelector(".status2").innerHTML = "unpaid");
} else if (date2 == currentdate) {
  var status2 = (document.querySelector(".status2").innerHTML = "Unpaid");
} else {
  var status2 = (document.querySelector(".status2").innerHTML =
    "Pay date over");
}
document.querySelector(".status2").style.color = "red";
document.querySelector(".status2").style.fontSize = "18px";
document.querySelector(".status2").style.fontWeight = "bolder";
//row 3
if (date3 > currentdate) {
  var status3 = (document.querySelector(".status3").innerHTML = "Unpaid");
} else if (date3 == currentdate) {
  var status3 = (document.querySelector(".status3").innerHTML = "Unpaid");
} else {
  var status3 = (document.querySelector(".status3").innerHTML =
    "Pay date over");
}
document.querySelector(".status3").style.fontWeight = "bolder";
//row 4
if (date4 > currentdate) {
  var status4 = (document.querySelector(".status4").innerHTML = "Unpaid");
} else if (date4 == currentdate) {
  var status4 = (document.querySelector(".status4").innerHTML = "Unpaid");
} else {
  var status4 = (document.querySelector(".status4").innerHTML =
    "Pay date over");
}
document.querySelector(".status4").style.color = "red";
document.querySelector(".status4").style.fontSize = "18px";
document.querySelector(".status4").style.fontWeight = "bolder";
//row 4
if (date5 > currentdate) {
  var status5 = (document.querySelector(".status5").innerHTML = "Unpaid");
} else if (date5 == currentdate) {
  var status5 = (document.querySelector(".status5").innerHTML = "Unpaid");
} else {
  var status5 = (document.querySelector(".status5").innerHTML =
    "Pay date over");
}
document.querySelector(".status5").style.fontWeight = "bolder";
document.querySelector(".status6").style.color = "green";
document.querySelector(".status6").style.fontWeight = "bolder";
document.querySelector(".status6").style.fontSize = "18px";
