var date1 = document.querySelectorAll(".lastdate")[0].innerHTML;
// console.log(date1);
//unix current date
// var unixdate1 = Date.parse(date1) / 1000;
// console.log(unixdate1);

var date2 = document.querySelectorAll(".lastdate")[1].innerHTML;
// console.log(date2);
//unix current date
// var unixdate2 = Date.parse(date2) / 1000;
// console.log(unixdate2);
var date3 = document.querySelectorAll(".lastdate")[2].innerHTML;
// console.log(date3);
//unix current date
// var unixdate3 = Date.parse(date3) / 1000;
// console.log(unixdate3);
var date4 = document.querySelectorAll(".lastdate")[3].innerHTML;
// console.log(date4);
var date5 = document.querySelectorAll(".lastdate")[4].innerHTML;
// console.log(date5);
//unix current date
// var unixdate3 = Date.parse(date3) / 1000;
// console.log(unixdate3);

// console.log(new Date(lastdate).valueOf());
var currentdate = new Date().toLocaleDateString();
// console.log("current date" + currentdate);
//unix current date
// var unixcurrent = Date.parse(currentdate) / 1000;
// console.log(unixcurrent);

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
var status1 = document.querySelector(".status1");
var sub_total1 = document.querySelector(".sub-total1").innerHTML;
var latefee = parseInt(sub_total1) + 100;
var total1 = document.querySelector(".total1");
if (date1 > currentdate) {
  status1.innerHTML = "Unpaid";
  total1.innerHTML = sub_total1;
} else if (date1 == currentdate) {
  status1.innerHTML = "Unpaid";
  total1.innerHTML = sub_total1;
} else {
  status1.innerHTML = "Pay date over";
  total1.innerHTML = latefee + "&nbsp;&nbsp;&nbsp;(10% late fee charge)";
}
document.querySelector(".status1").style.fontWeight = "bolder";

//row 2
var status2 = document.querySelector(".status2");
var sub_total2 = document.querySelector(".sub-total2").innerHTML;
var latefee = parseInt(sub_total2) + 100;
var total2 = document.querySelector(".total2");
if (date2 > currentdate) {
  status2.innerHTML = "unpaid";
  total2.innerHTML = sub_total2;
} else if (date2 == currentdate) {
  status2.innerHTML = "unpaid";
  total2.innerHTML = sub_total2;
} else {
  status2.innerHTML = "Pay date over";
  total2.innerHTML = latefee + "&nbsp;&nbsp;&nbsp;(10% late fee charge)";
}
document.querySelector(".status2").style.color = "red";
document.querySelector(".status2").style.fontSize = "18px";
document.querySelector(".status2").style.fontWeight = "bolder";

//row 3
var status3 = document.querySelector(".status3");
var sub_total3 = document.querySelector(".sub-total3").innerHTML;
var latefee = parseInt(sub_total3) + 100;
var total3 = document.querySelector(".total3");
if (date3 > currentdate) {
  status3.innerHTML = "Unpaid";
  total3.innerHTML = status3;
} else if (date3 == currentdate) {
  status3.innerHTML = "Unpaid";
  total3.innerHTML = status3;
} else {
  status3.innerHTML = "Pay date over";
  total3.innerHTML = latefee + "&nbsp;&nbsp;&nbsp;(10% late fee charge)";
}
document.querySelector(".status3").style.color = "red";
document.querySelector(".status3").style.fontSize = "18px";
document.querySelector(".status3").style.fontWeight = "bolder";

//row 4
var status4 = document.querySelector(".status4");
var sub_total4 = document.querySelector(".sub-total4").innerHTML;
var latefee = parseInt(sub_total4) + 100;
var total4 = document.querySelector(".total4");
if (date4 > currentdate) {
  status4.innerHTML = "Unpaid";
  total4.innerHTML = sub_total4;
} else if (date4 == currentdate) {
  status4.innerHTML = "Unpaid";
  total4.innerHTML = sub_total4;
} else {
  status4.innerHTML = "Pay date over";
  total4.innerHTML = latefee + "&nbsp;&nbsp;&nbsp;(10% late fee charge)";
}
document.querySelector(".status4").style.color = "red";
document.querySelector(".status4").style.fontSize = "18px";
document.querySelector(".status4").style.fontWeight = "bolder";

//row 5
var status5 = document.querySelector(".status5");
var sub_total5 = document.querySelector(".sub-total5").innerHTML;
var latefee = parseInt(sub_total5) + 100;
var total5 = document.querySelector(".total5");
if (date5 > currentdate) {
  status5.innerHTML = "Unpaid";
  total5.innerHTML = sub_total5;
} else if (date5 == currentdate) {
  status5.innerHTML = "Unpaid";
  total5.innerHTML = sub_total5;
} else {
  status5.innerHTML = "Pay date over";
  total5.innerHTML = latefee + "&nbsp;&nbsp;&nbsp;(10% late fee charge)";
}
document.querySelector(".status5").style.fontWeight = "bolder";
document.querySelector(".status6").style.color = "green";
document.querySelector(".status6").style.fontWeight = "bolder";
document.querySelector(".status6").style.fontSize = "18px";

//row6
var sub_total6 = document.querySelector(".sub-total6").innerHTML;
var total6 = document.querySelector(".total6").innerHTML;

//sub total
var total_sub =
  parseInt(sub_total1) +
  parseInt(sub_total2) +
  parseInt(sub_total3) +
  parseInt(sub_total4) +
  parseInt(sub_total5) -
  parseInt(sub_total6);
var subtotal = document.querySelector(".subtotal");
subtotal.innerHTML = "Total Dues : " + total_sub;
subtotal.style.color = "orange";
//total
var sum =
  parseInt(total1.innerHTML) +
  parseInt(total2.innerHTML) +
  parseInt(total3.innerHTML) +
  parseInt(total4.innerHTML) +
  parseInt(total5.innerHTML) -
  parseInt(total6);
var total = document.querySelector(".totaldues");
total.innerHTML = "Total Dues : " + sum;
total.style.color = "orange";
