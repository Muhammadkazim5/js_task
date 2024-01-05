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
var date7 = document.querySelectorAll(".lastdate")[6].innerHTML;
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
var per1 = (parseInt(sub_total1) * 10) / 100;
var latefee = parseInt(sub_total1) + per1;
var total1 = document.querySelector(".total1");
if (date1 < currentdate) {
  status1.innerHTML = "Unpaid";
  total1.innerHTML = sub_total1;
} else if (date1 == currentdate) {
  status1.innerHTML = "Unpaid";
  total1.innerHTML = sub_total1;
} else {
  status1.innerHTML = "Pay date over";
  total1.innerHTML = latefee + "&nbsp;&nbsp;&nbsp;(10% late fee charge)";
  status1.style.color = "red";
  status1.style.fontSizer = "18px";
  status1.style.fontWeight = "bolder";
}
document.querySelector(".status1").style.fontWeight = "bolder";

//row 2
var status2 = document.querySelector(".status2");
var sub_total2 = document.querySelector(".sub-total2").innerHTML;
var per2 = (parseInt(sub_total2) * 10) / 100;
var latefee = parseInt(sub_total2) + per2;
var total2 = document.querySelector(".total2");
if (date2 < currentdate) {
  status2.innerHTML = "unpaid";
  total2.innerHTML = sub_total2;
} else if (date2 == currentdate) {
  status2.innerHTML = "unpaid";
  total2.innerHTML = sub_total2;
} else {
  status2.innerHTML = "Pay date over";
  total2.innerHTML = latefee + "&nbsp;&nbsp;&nbsp;(10% late fee charge)";
  status2.style.color = "red";
  status2.style.fontSizer = "18px";
  status2.style.fontWeight = "bolder";
}

//row 3
var status3 = document.querySelector(".status3");
var sub_total3 = document.querySelector(".sub-total3").innerHTML;
var per3 = (parseInt(sub_total3) * 10) / 100;
var latefee3 = parseInt(sub_total3) + per3;
var total3 = document.querySelector(".total3");
if (date3 < currentdate) {
  status3.innerHTML = "Unpaid";
  total3.innerHTML = status3;
  total3.innerHTML = sub_total3;
} else if (date3 == currentdate) {
  status3.innerHTML = "Unpaid";
  total3.innerHTML = status3;
} else {
  status3.innerHTML = "Pay date over";
  total3.innerHTML = latefee3 + "&nbsp;&nbsp;&nbsp;(10% late fee charge)";
  status3.style.color = "red";
  status3.style.fontSizer = "18px";
  status3.style.fontWeight = "bolder";
}

//row 4
var status4 = document.querySelector(".status4");
var sub_total4 = document.querySelector(".sub-total4").innerHTML;
var per4 = (parseInt(sub_total4) * 10) / 100;
var latefee = parseInt(sub_total4) + per4;
var total4 = document.querySelector(".total4");
if (date4 < currentdate) {
  status4.innerHTML = "Unpaid";
  total4.innerHTML = sub_total4;
} else if (date4 == currentdate) {
  status4.innerHTML = "Unpaid";
  total4.innerHTML = sub_total4;
} else {
  status4.innerHTML = "Pay date over";
  total4.innerHTML = latefee + "&nbsp;&nbsp;&nbsp;(10% late fee charge)";
  status4.style.color = "red";
  status4.style.fontSizer = "18px";
  status4.style.fontWeight = "bolder";
}

//row 5
var status5 = document.querySelector(".status5");
var sub_total5 = document.querySelector(".sub-total5").innerHTML;
var per5 = (parseInt(sub_total5) * 10) / 100;
var latefee = parseInt(sub_total5) + per5;
var total5 = document.querySelector(".total5");
if (date5 < currentdate) {
  status5.innerHTML = "Unpaid";
  total5.innerHTML = sub_total5;
  status5.style.fontWeight = "bolder";
} else if (date5 == currentdate) {
  status5.innerHTML = "Unpaid";
  total5.innerHTML = sub_total5;
  status5.style.fontWeight = "bolder";
} else {
  status5.innerHTML = "Pay date over";
  total5.innerHTML = latefee + "&nbsp;&nbsp;&nbsp;(10% late fee charge)";
  status5.style.color = "red";
  status5.style.fontSizer = "18px";
  status5.style.fontWeight = "bolder";
}
//row 7
var status7 = document.querySelector(".status7");
var sub_total7 = document.querySelector(".sub-total7").innerHTML;
var per7 = (parseInt(sub_total7) * 10) / 100;
var latefee = parseInt(sub_total7) + per7;
var total7 = document.querySelector(".total7");
if (date7 < currentdate) {
  status7.innerHTML = "Unpaid";
  total7.innerHTML = sub_total7;
  status7.style.fontWeight = "bolder";
} else if (date7 == currentdate) {
  status7.innerHTML = "Unpaid";
  total7.innerHTML = sub_total5;
  status7.style.fontWeight = "bolder";
} else {
  status7.innerHTML = "Pay date over";
  total7.innerHTML = latefee + "&nbsp;&nbsp;&nbsp;(10% late fee charge)";
  status7.style.color = "red";
  status7.style.fontSizer = "18px";
  status7.style.fontWeight = "bolder";
}
document.querySelector(".status6").style.color = "green";
document.querySelector(".status6").style.fontWeight = "bolder";
document.querySelector(".status6").style.fontSize = "18px";

//row6
// var sub_total6 = document.querySelector(".sub-total6").innerHTML;
var total6 = document.querySelector(".total6").innerHTML;
// console.log(sub_total6);
//sub total
// var total_sub =
//     parseInt(sub_total1) +
//     parseInt(sub_total2) +
//     parseInt(sub_total3) +
//     parseInt(sub_total4) +
//     parseInt(sub_total5) +
//     parseInt(sub_total6) -
//     sub_total6;
// var subtotal = document.querySelector(".subtotal");
// subtotal.innerHTML = "Total Dues : " + total_sub;
// subtotal.style.color = "orange";
//total
var sum =
  parseInt(total1.innerHTML) +
  parseInt(total2.innerHTML) +
  parseInt(total3.innerHTML) +
  parseInt(total4.innerHTML) +
  parseInt(total5.innerHTML) +
  parseInt(total6) +
  parseInt(total7.innerHTML);
var total = document.querySelector(".totaldues");
sum = sum - parseInt(total6);
total.innerHTML = "Total Dues : " + sum;
total.style.color = "orange";
//----------------------------------------
// function reservationListFunction() {
//   // Declare variables
//   var input, filter, table, tr, td, i;
//   input = document.getElementById("reservationListInput");
//   filter = input.value.toUpperCase();
//   table = document.getElementById("reservationTable");
//   tr = table.getElementsByTagName("tr");

//   // Loop through all table rows, and hide those who don't match the search query
//   for (i = 0; i < tr.length; i++) {
//     td = tr[i].getElementsByTagName("td")[0];
//     if (td) {
//       if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
//         tr[i].style.display = "";
//       } else {
//         tr[i].style.display = "none";
//       }
//     }
//   }
// }
//-----------------------------------------
function reservationListFunction() {
  var filter, table, tr, input, td, i;
  input = document.getElementById("reservationListInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("reservationTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
//total fee
var paid = 0;
var unpaid = 0;
var paydateover = 0;
var total_fee = 0;
var i;
table = document.getElementById("reservationTable");
tr = table.getElementsByTagName("tr");
for (i = 0; i < tr.length; i++) {
  td = tr[i].getElementsByTagName("td")[2];
  if (td) {
    if (td.innerHTML == "Unpaid") {
      td = tr[i].getElementsByTagName("td")[3];
      unpaid = unpaid + parseInt(td.innerHTML);
      // console.log(unpaid);
    } else if (td.innerHTML == "Pay date over") {
      td = tr[i].getElementsByTagName("td")[3];
      paydateover = paydateover + parseInt(td.innerHTML);
      // console.log(paydateover);
    } else if (td.innerHTML == "Paid") {
      td = tr[i].getElementsByTagName("td")[3];
      paid = paid + parseInt(td.innerHTML);
      // console.log(paid);
    }
  }
}
total_fee = unpaid + paydateover + paid - paid;
subtotal = document.querySelector(".subtotal");
subtotal.innerHTML = "Total Dues : " + total_fee;
subtotal.style.color = "orange";

//total fee after late charges
// var i;
// var totals = 0;
// table = document.getElementById("reservationTable");
// tr = table.getElementsByTagName("tr");
// for (i = 0; i < tr.length; i++) {
//     td = tr[i].getElementsByTagName("td")[5];
//     if (td) {
//         totals = totals + parseInt(td.innerHTML);
//         console.log(parseInt(td.innerHTML));
//     }
// }

// btn.addEventListener("click", () => {
//     if (popup.style.display == "block") {
//         popup.style.display = "none";
//     } else {
//         popup.style.display = "block";
//     }
// });
names = document.querySelector("#name");
statuss = document.querySelector("#status");
lastdate = document.querySelector("#lastdate");
fees = document.querySelector("#fee");
var popup = document.querySelector(".popup");

function myFunction() {
  if (popup.style.display == "block") {
    popup.style.display = "none";
    // btn.style.color = "white";
  } else {
    popup.style.display = "block";
    // btn.style.color = "gold";
  }
}
var btn1 = document.querySelector(".btn1");
btn1.addEventListener("click", function (e) {
  const cell = e.target.closest("td");
  if (!cell) {
    return;
  } // Quit, not clicked on a cell
  const row = cell.parentElement;
  // console.log(row);
  // console.log(cell.innerHTML, row.rowIndex, cell.cellIndex);
  td = row.getElementsByTagName("td");
  for (i = 0; i < 7; i++) {
    td = row.getElementsByTagName("td")[i];
    console.log(td.innerHTML);
    popup.append = td.innerHTML;
    // if ((i = 1)) {
    //   id.innerText = td.innerHTML;
    // }
  }
});

// var cells = document.querySelectorAll("#reservationTable td");
// for (var i = 0; i < cells.length; i++) {
//   cells[i].addEventListener("click", function () {
//     console.log(this.innerHTML);
//   });
// }
var btn2 = document.querySelector(".btn2");

btn2.addEventListener("click", function (e) {
  const cell = e.target.closest("td");
  if (!cell) {
    return;
  } // Quit, not clicked on a cell
  const row = cell.parentElement;
  // console.log(row);
  // console.log(cell.innerHTML, row.rowIndex, cell.cellIndex);
});
var btn3 = document.querySelector(".btn3");

btn3.addEventListener("click", function (e) {
  const cell = e.target.closest("td");
  if (!cell) {
    return;
  } // Quit, not clicked on a cell
  const row = cell.parentElement;
  // console.log(row);
  // console.log(cell.innerHTML, row.rowIndex, cell.cellIndex);
});
