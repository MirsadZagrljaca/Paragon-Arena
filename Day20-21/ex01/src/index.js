// var and functions for shift and caps lock

var shiftKey = false;

function btnToLower() {
  var y1 = document.getElementById("btnQ").innerHTML;
  document.getElementById("btnQ").innerHTML = y1.toLowerCase();
  var y2 = document.getElementById("btnW").innerHTML;
  document.getElementById("btnW").innerHTML = y2.toLowerCase();
  var y3 = document.getElementById("btnE").innerHTML;
  document.getElementById("btnE").innerHTML = y3.toLowerCase();
  var y4 = document.getElementById("btnR").innerHTML;
  document.getElementById("btnR").innerHTML = y4.toLowerCase();
  var y5 = document.getElementById("btnT").innerHTML;
  document.getElementById("btnT").innerHTML = y5.toLowerCase();
  var y6 = document.getElementById("btnY").innerHTML;
  document.getElementById("btnY").innerHTML = y6.toLowerCase();
  var y7 = document.getElementById("btnU").innerHTML;
  document.getElementById("btnU").innerHTML = y7.toLowerCase();
  var y8 = document.getElementById("btnI").innerHTML;
  document.getElementById("btnI").innerHTML = y8.toLowerCase();
  var y9 = document.getElementById("btnO").innerHTML;
  document.getElementById("btnO").innerHTML = y9.toLowerCase();
  var y10 = document.getElementById("btnP").innerHTML;
  document.getElementById("btnP").innerHTML = y10.toLowerCase();

  var y11 = document.getElementById("btnA").innerHTML;
  document.getElementById("btnA").innerHTML = y11.toLowerCase();
  var y12 = document.getElementById("btnS").innerHTML;
  document.getElementById("btnS").innerHTML = y12.toLowerCase();
  var y13 = document.getElementById("btnD").innerHTML;
  document.getElementById("btnD").innerHTML = y13.toLowerCase();
  var y14 = document.getElementById("btnF").innerHTML;
  document.getElementById("btnF").innerHTML = y14.toLowerCase();
  var y15 = document.getElementById("btnG").innerHTML;
  document.getElementById("btnG").innerHTML = y15.toLowerCase();
  var y16 = document.getElementById("btnH").innerHTML;
  document.getElementById("btnH").innerHTML = y16.toLowerCase();
  var y17 = document.getElementById("btnJ").innerHTML;
  document.getElementById("btnJ").innerHTML = y17.toLowerCase();
  var y18 = document.getElementById("btnK").innerHTML;
  document.getElementById("btnK").innerHTML = y18.toLowerCase();
  var y19 = document.getElementById("btnL").innerHTML;
  document.getElementById("btnL").innerHTML = y19.toLowerCase();

  var y20 = document.getElementById("btnZ").innerHTML;
  document.getElementById("btnZ").innerHTML = y20.toLowerCase();
  var y21 = document.getElementById("btnX").innerHTML;
  document.getElementById("btnX").innerHTML = y21.toLowerCase();
  var y22 = document.getElementById("btnC").innerHTML;
  document.getElementById("btnC").innerHTML = y22.toLowerCase();
  var y23 = document.getElementById("btnV").innerHTML;
  document.getElementById("btnV").innerHTML = y23.toLowerCase();
  var y24 = document.getElementById("btnB").innerHTML;
  document.getElementById("btnB").innerHTML = y24.toLowerCase();
  var y25 = document.getElementById("btnN").innerHTML;
  document.getElementById("btnN").innerHTML = y25.toLowerCase();
  var y26 = document.getElementById("btnM").innerHTML;
  document.getElementById("btnM").innerHTML = y26.toLowerCase();
}

function btnToUpper() {
  var x1 = document.getElementById("btnQ").innerHTML;
  document.getElementById("btnQ").innerHTML = x1.toUpperCase();
  var x2 = document.getElementById("btnW").innerHTML;
  document.getElementById("btnW").innerHTML = x2.toUpperCase();
  var x3 = document.getElementById("btnE").innerHTML;
  document.getElementById("btnE").innerHTML = x3.toUpperCase();
  var x4 = document.getElementById("btnR").innerHTML;
  document.getElementById("btnR").innerHTML = x4.toUpperCase();
  var x5 = document.getElementById("btnT").innerHTML;
  document.getElementById("btnT").innerHTML = x5.toUpperCase();
  var x6 = document.getElementById("btnY").innerHTML;
  document.getElementById("btnY").innerHTML = x6.toUpperCase();
  var x7 = document.getElementById("btnU").innerHTML;
  document.getElementById("btnU").innerHTML = x7.toUpperCase();
  var x8 = document.getElementById("btnI").innerHTML;
  document.getElementById("btnI").innerHTML = x8.toUpperCase();
  var x9 = document.getElementById("btnO").innerHTML;
  document.getElementById("btnO").innerHTML = x9.toUpperCase();
  var x10 = document.getElementById("btnP").innerHTML;
  document.getElementById("btnP").innerHTML = x10.toUpperCase();

  var x11 = document.getElementById("btnA").innerHTML;
  document.getElementById("btnA").innerHTML = x11.toUpperCase();
  var x12 = document.getElementById("btnS").innerHTML;
  document.getElementById("btnS").innerHTML = x12.toUpperCase();
  var x13 = document.getElementById("btnD").innerHTML;
  document.getElementById("btnD").innerHTML = x13.toUpperCase();
  var x14 = document.getElementById("btnF").innerHTML;
  document.getElementById("btnF").innerHTML = x14.toUpperCase();
  var x15 = document.getElementById("btnG").innerHTML;
  document.getElementById("btnG").innerHTML = x15.toUpperCase();
  var x16 = document.getElementById("btnH").innerHTML;
  document.getElementById("btnH").innerHTML = x16.toUpperCase();
  var x17 = document.getElementById("btnJ").innerHTML;
  document.getElementById("btnJ").innerHTML = x17.toUpperCase();
  var x18 = document.getElementById("btnK").innerHTML;
  document.getElementById("btnK").innerHTML = x18.toUpperCase();
  var x19 = document.getElementById("btnL").innerHTML;
  document.getElementById("btnL").innerHTML = x19.toUpperCase();

  var x20 = document.getElementById("btnZ").innerHTML;
  document.getElementById("btnZ").innerHTML = x20.toUpperCase();
  var x21 = document.getElementById("btnX").innerHTML;
  document.getElementById("btnX").innerHTML = x21.toUpperCase();
  var x22 = document.getElementById("btnC").innerHTML;
  document.getElementById("btnC").innerHTML = x22.toUpperCase();
  var x23 = document.getElementById("btnV").innerHTML;
  document.getElementById("btnV").innerHTML = x23.toUpperCase();
  var x24 = document.getElementById("btnB").innerHTML;
  document.getElementById("btnB").innerHTML = x24.toUpperCase();
  var x25 = document.getElementById("btnN").innerHTML;
  document.getElementById("btnN").innerHTML = x25.toUpperCase();
  var x26 = document.getElementById("btnM").innerHTML;
  document.getElementById("btnM").innerHTML = x26.toUpperCase();
}

// Numbers

var textarea = document.getElementById("textarea"),
  btn1 = document.getElementById("btn1");
btn2 = document.getElementById("btn2");
btn3 = document.getElementById("btn3");
btn4 = document.getElementById("btn4");
btn5 = document.getElementById("btn5");
btn6 = document.getElementById("btn6");
btn7 = document.getElementById("btn7");
btn8 = document.getElementById("btn8");
btn9 = document.getElementById("btn9");
btn0 = document.getElementById("btn0");

btn1.addEventListener(
  "click",
  function () {
    textarea.value += btn1.innerText;
    textarea.focus();
  },
  false
);
btn2.addEventListener(
  "click",
  function () {
    textarea.value += btn2.innerText;
    textarea.focus();
  },
  false
);
btn3.addEventListener(
  "click",
  function () {
    textarea.value += btn3.innerText;
    textarea.focus();
  },
  false
);
btn4.addEventListener(
  "click",
  function () {
    textarea.value += btn4.innerText;
    textarea.focus();
  },
  false
);
btn5.addEventListener(
  "click",
  function () {
    textarea.value += btn5.innerText;
    textarea.focus();
  },
  false
);
btn6.addEventListener(
  "click",
  function () {
    textarea.value += btn6.innerText;
    textarea.focus();
  },
  false
);
btn7.addEventListener(
  "click",
  function () {
    textarea.value += btn7.innerText;
    textarea.focus();
  },
  false
);
btn8.addEventListener(
  "click",
  function () {
    textarea.value += btn8.innerText;
    textarea.focus();
  },
  false
);
btn9.addEventListener(
  "click",
  function () {
    textarea.value += btn9.innerText;
    textarea.focus();
  },
  false
);
btn0.addEventListener(
  "click",
  function () {
    textarea.value += btn0.innerText;
    textarea.focus();
  },
  false
);

// letters

var btnQ = document.getElementById("btnQ");
btnW = document.getElementById("btnW");
btnE = document.getElementById("btnE");
btnR = document.getElementById("btnR");
btnT = document.getElementById("btnT");
btnY = document.getElementById("btnY");
btnU = document.getElementById("btnU");
btnI = document.getElementById("btnI");
btnO = document.getElementById("btnO");
btnP = document.getElementById("btnP");

btnQ.addEventListener(
  "click",
  function () {
    textarea.value += btnQ.innerText;
    textarea.focus();

    if (shiftKey) {
      var x = document.getElementById("btnQ").innerHTML;
      btnToLower();
      shiftKey = false;
    }
  },
  false
);
btnW.addEventListener(
  "click",
  function () {
    textarea.value += btnW.innerText;
    textarea.focus();

    if (shiftKey) {
      var x = document.getElementById("btnQ").innerHTML;
      btnToLower();
      shiftKey = false;
    }
  },
  false
);
btnE.addEventListener(
  "click",
  function () {
    textarea.value += btnE.innerText;
    textarea.focus();

    if (shiftKey) {
      var x = document.getElementById("btnQ").innerHTML;
      btnToLower();
      shiftKey = false;
    }
  },
  false
);
btnR.addEventListener(
  "click",
  function () {
    textarea.value += btnR.innerText;
    textarea.focus();

    if (shiftKey) {
      var x = document.getElementById("btnQ").innerHTML;
      btnToLower();
      shiftKey = false;
    }
  },
  false
);
btnT.addEventListener(
  "click",
  function () {
    textarea.value += btnT.innerText;
    textarea.focus();

    if (shiftKey) {
      var x = document.getElementById("btnQ").innerHTML;
      btnToLower();
      shiftKey = false;
    }
  },
  false
);
btnY.addEventListener(
  "click",
  function () {
    textarea.value += btnY.innerText;
    textarea.focus();

    if (shiftKey) {
      var x = document.getElementById("btnQ").innerHTML;
      btnToLower();
      shiftKey = false;
    }
  },
  false
);
btnU.addEventListener(
  "click",
  function () {
    textarea.value += btnU.innerText;
    textarea.focus();

    if (shiftKey) {
      var x = document.getElementById("btnQ").innerHTML;
      btnToLower();
      shiftKey = false;
    }
  },
  false
);
btnI.addEventListener(
  "click",
  function () {
    textarea.value += btnI.innerText;
    textarea.focus();

    if (shiftKey) {
      var x = document.getElementById("btnQ").innerHTML;
      btnToLower();
      shiftKey = false;
    }
  },
  false
);
btnO.addEventListener(
  "click",
  function () {
    textarea.value += btnO.innerText;
    textarea.focus();

    if (shiftKey) {
      var x = document.getElementById("btnQ").innerHTML;
      btnToLower();
      shiftKey = false;
    }
  },
  false
);
btnP.addEventListener(
  "click",
  function () {
    textarea.value += btnP.innerText;
    textarea.focus();

    if (shiftKey) {
      var x = document.getElementById("btnQ").innerHTML;
      btnToLower();
      shiftKey = false;
    }
  },
  false
);

var btnA = document.getElementById("btnA");
btnS = document.getElementById("btnS");
btnD = document.getElementById("btnD");
btnF = document.getElementById("btnF");
btnG = document.getElementById("btnG");
btnH = document.getElementById("btnH");
btnJ = document.getElementById("btnJ");
btnK = document.getElementById("btnK");
btnL = document.getElementById("btnL");

btnA.addEventListener(
  "click",
  function () {
    textarea.value += btnA.innerText;
    textarea.focus();

    if (shiftKey) {
      var x = document.getElementById("btnQ").innerHTML;
      btnToLower();
      shiftKey = false;
    }
  },
  false
);
btnS.addEventListener(
  "click",
  function () {
    textarea.value += btnS.innerText;
    textarea.focus();

    if (shiftKey) {
      var x = document.getElementById("btnQ").innerHTML;
      btnToLower();
      shiftKey = false;
    }
  },
  false
);
btnD.addEventListener(
  "click",
  function () {
    textarea.value += btnD.innerText;
    textarea.focus();

    if (shiftKey) {
      var x = document.getElementById("btnQ").innerHTML;
      btnToLower();
      shiftKey = false;
    }
  },
  false
);
btnF.addEventListener(
  "click",
  function () {
    textarea.value += btnF.innerText;
    textarea.focus();

    if (shiftKey) {
      var x = document.getElementById("btnQ").innerHTML;
      btnToLower();
      shiftKey = false;
    }
  },
  false
);
btnG.addEventListener(
  "click",
  function () {
    textarea.value += btnG.innerText;
    textarea.focus();

    if (shiftKey) {
      var x = document.getElementById("btnQ").innerHTML;
      btnToLower();
      shiftKey = false;
    }
  },
  false
);
btnH.addEventListener(
  "click",
  function () {
    textarea.value += btnH.innerText;
    textarea.focus();

    if (shiftKey) {
      var x = document.getElementById("btnQ").innerHTML;
      btnToLower();
      shiftKey = false;
    }
  },
  false
);
btnJ.addEventListener(
  "click",
  function () {
    textarea.value += btnJ.innerText;
    textarea.focus();

    if (shiftKey) {
      var x = document.getElementById("btnQ").innerHTML;
      btnToLower();
      shiftKey = false;
    }
  },
  false
);
btnK.addEventListener(
  "click",
  function () {
    textarea.value += btnK.innerText;
    textarea.focus();

    if (shiftKey) {
      var x = document.getElementById("btnQ").innerHTML;
      btnToLower();
      shiftKey = false;
    }
  },
  false
);
btnL.addEventListener(
  "click",
  function () {
    textarea.value += btnL.innerText;
    textarea.focus();

    if (shiftKey) {
      var x = document.getElementById("btnQ").innerHTML;
      btnToLower();
      shiftKey = false;
    }
  },
  false
);

var btnZ = document.getElementById("btnZ");
btnX = document.getElementById("btnX");
btnC = document.getElementById("btnC");
btnV = document.getElementById("btnV");
btnB = document.getElementById("btnB");
btnN = document.getElementById("btnN");
btnM = document.getElementById("btnM");

btnZ.addEventListener(
  "click",
  function () {
    textarea.value += btnZ.innerText;
    textarea.focus();

    if (shiftKey) {
      var x = document.getElementById("btnQ").innerHTML;
      btnToLower();
      shiftKey = false;
    }
  },
  false
);
btnX.addEventListener(
  "click",
  function () {
    textarea.value += btnX.innerText;
    textarea.focus();

    if (shiftKey) {
      var x = document.getElementById("btnQ").innerHTML;
      btnToLower();
      shiftKey = false;
    }
  },
  false
);
btnC.addEventListener(
  "click",
  function () {
    textarea.value += btnC.innerText;
    textarea.focus();

    if (shiftKey) {
      var x = document.getElementById("btnQ").innerHTML;
      btnToLower();
      shiftKey = false;
    }
  },
  false
);
btnV.addEventListener(
  "click",
  function () {
    textarea.value += btnV.innerText;
    textarea.focus();

    if (shiftKey) {
      var x = document.getElementById("btnQ").innerHTML;
      btnToLower();
      shiftKey = false;
    }
  },
  false
);
btnB.addEventListener(
  "click",
  function () {
    textarea.value += btnB.innerText;
    textarea.focus();

    if (shiftKey) {
      var x = document.getElementById("btnQ").innerHTML;
      btnToLower();
      shiftKey = false;
    }
  },
  false
);
btnN.addEventListener(
  "click",
  function () {
    textarea.value += btnN.innerText;
    textarea.focus();

    if (shiftKey) {
      var x = document.getElementById("btnQ").innerHTML;
      btnToLower();
      shiftKey = false;
    }
  },
  false
);
btnM.addEventListener(
  "click",
  function () {
    textarea.value += btnM.innerText;
    textarea.focus();

    if (shiftKey) {
      var x = document.getElementById("btnQ").innerHTML;
      btnToLower();
      shiftKey = false;
    }
  },
  false
);

// rest

var btnLine = document.getElementById("btnLine");
btnUnderline = document.getElementById("btnUnderline");

btnLine.addEventListener(
  "click",
  function () {
    textarea.value += btnLine.innerText;
    textarea.focus();
  },
  false
);
btnUnderline.addEventListener(
  "click",
  function () {
    textarea.value += btnUnderline.innerText;
    textarea.focus();
  },
  false
);

// Space

var btnSpace = document.getElementById("btnSpace");

btnSpace.addEventListener(
  "click",
  function () {
    textarea.value += " ";
    textarea.focus();
  },
  false
);

// Back Space

var btnBackSpace = document.getElementById("btnBackSpace");

btnBackSpace.addEventListener(
  "click",
  function () {
    textarea.value = textarea.value.substring(0, textarea.value.length - 1);
    textarea.focus();
  },
  false
);

// Enter

var btnEnter = document.getElementById("btnEnter");

btnEnter.addEventListener(
  "click",
  function () {
    textarea.value += "\n";
    textarea.focus();
  },
  false
);

// Caps Lock

var btnCaps = document.getElementById("btnCaps");

btnCaps.addEventListener(
  "click",
  function () {
    if (document.getElementById("btnQ").innerHTML == "q") {
      btnToUpper();
    } else {
      btnToLower();
    }
  },
  false
);

// shift

var btnShift = document.getElementById("btnShift");

btnShift.addEventListener(
  "click",
  function () {
    btnToUpper();

    shiftKey = true;
  },
  false
);

// submit

var btnOK = document.getElementById("btnOK");

btnOK.addEventListener(
  "click",
  function () {
    alert(textarea.value);
  },
  false
);
