function checkResult1() {
  let value1 = Number(document.getElementById("t1").value);
  let value2 = Number(document.getElementById("t2").value);
  let result = document.getElementById("r1");
  let arr = [];
  for (let i = value1; i <= value2; i++) {
    arr.push(i);
  }
  result.innerHTML = arr;
}

function checkResult2() {
  let value1 = Number(document.getElementById("t1").value);
  let value2 = Number(document.getElementById("t2").value);
  let result = document.getElementById("r1");
  let arr = [];

  for (let i = value1; i <= value2; i++) {
    if (i % 2 === 0) {
      arr.push(i);
    }
    result.innerHTML = arr;
  }
}

function checkResult3() {
  let value1 = Number(document.getElementById("t1").value);
  let value2 = Number(document.getElementById("t2").value);
  let result = document.getElementById("r1");
  let arr = [];

  for (let i = value1; i <= value2; i++) {
    if (i % 2 !== 0) {
      arr.push(i);
    }
    result.innerHTML = arr;
  }
}

function checkResult4() {
  let arr = ["a", "b", "c", "d", "e"];
  for (let arr2 of arr) {
    alert(arr2);
  }
}

function checkResult5() {
  let result = document.getElementById("r2");
  let obj = { x: 1, y: 2, z: 3 };
  let arr = [];
  for (let key in obj) {
    arr.push(key);
    result.innerHTML = arr;
  }
}

function checkResult6() {
  let result = document.getElementById("r3");
  let obj = { x: 1, y: 2, z: 3 };
  let arr = [];
  for (let key in obj) {
    arr.push(obj[key]);
    result.innerHTML = arr;
  }
}

function checkResult7() {
  let value1 = Number(document.getElementById("t7").value);
  let result = document.getElementById("r7");
  let arr = [];
  while (value1 <= 100) {
    arr.push(value1);
    value1++;
    result.innerHTML = arr;
  }
}

function checkResult8() {
  let result = document.getElementById("r8");
  let arr = [];
  let i = 11;
  while (i <= 33) {
    arr.push(i);
    i++;
    result.innerHTML = arr;
  }
}

function checkResult9() {
  let value1 = Number(document.getElementById("t9").value);
  let result = document.getElementById("r9");
  let arr = [];
  while (value1 <= 1000) {
    arr.push(value1);
    value1 *= 3;
    result.innerHTML = arr;
  }
}

function checkResult10() {
  let result = document.getElementById("r10");
  let arr = [2, 5, 9, 15, 1, 4];
  let arr2 = [];
  for (let elem of arr) {
    if (elem >= 3 && elem <= 10) {
      arr2.push(elem);
    }
  }
  result.innerHTML = arr2;
}

function checkResult11() {
  let result = document.getElementById("r11");
  let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
  let arr = [];
  for (let key in obj) {
    if (obj[key] % 2 !== 0) {
      arr.push(obj[key]);
    }
  }
  result.innerHTML = arr;
}

function checkResult12() {
  let value1 = Number(document.getElementById("t3").value);
  let value2 = Number(document.getElementById("t4").value);
  let result = document.getElementById("r12");
  let arr = Number([]);
  for (let i = value1; i <= value2; i++) {
    if (i % 2 === 0) {
      arr += i;
    }
    result.innerHTML = arr;
  }
}

function checkResult13() {
  let value1 = Number(document.getElementById("t3").value);
  let value2 = Number(document.getElementById("t4").value);
  let result = document.getElementById("r12");
  let arr = Number([]);
  for (let i = value1; i <= value2; i++) {
    if (i % 2 !== 0) {
      arr += i;
    }
    result.innerHTML = arr;
  }
}

function checkResult14() {
  let value1 = Number(document.getElementById("t3").value);
  let value2 = Number(document.getElementById("t4").value);
  let result = document.getElementById("r12");
  let arr = [1];
  for (let i = value1; i <= value2; i++) {
    arr *= i;
  }
  result.innerHTML = arr;
}

function checkResult15() {
  let result = document.getElementById("r16");
  let arr = [2, 5, 9, 3, 1, 4];
  let res = 0;
  for (let elem of arr) {
    res += elem;
  }
  result.innerHTML = res;
}

function checkResult16() {
  let result = document.getElementById("r16");
  let arr = [2, 5, 9, 3, 1, 4];
  let res = 0;
  for (let elem of arr) {
    if (elem % 2 === 0) {
      res += elem;
    }
    result.innerHTML = res;
  }
}

function checkResult17() {
  let result = document.getElementById("r16");
  let arr = [2, 5, 9, 3, 1, 4];
  let res = 0;
  for (let elem of arr) {
    res += elem ** 2;
  }
  result.innerHTML = res;
}

function checkResult18() {
  let result = document.getElementById("r16");
  let arr = [2, 5, 9, 3, 1, 4];
  let res = 1;
  for (let elem of arr) {
    res *= elem;
  }
  result.innerHTML = res;
}

function checkResult19() {
  let result = document.getElementById("r19");
  let str = "";
  for (let i = 1; i <= 5; i++) {
    str += "-";
  }
  result.innerHTML = str;
}

function checkResult20() {
  let result = document.getElementById("r20");
  let str = "";
  for (let i = 1; i <= 9; i++) {
    str += i;
  }
  result.innerHTML = str;
}

function checkResult21() {
  let result = document.getElementById("r21");
  let str = "";
  for (let i = 9; i >= 1; i--) {
    str += i;
  }
  result.innerHTML = str;
}

function checkResult22() {
  let result = document.getElementById("r22");
  let str = "-";
  for (let i = 1; i <= 9; i++) {
    str += i;
    str += "-";
  }
  result.innerHTML = str;
}

function checkResult23() {
  let result = document.getElementById("r23");
  let arr = [];
  for (let i = 10; i <= 1000; i++) {
    let str = String(i);
    arr += str[0];
    result.innerHTML = arr;
  }
}

function checkResult24() {
  let result = document.getElementById("r24");
  let arr = [];
  for (let i = 10; i <= 1000; i++) {
    let str = String(i);
    arr.push(Number(str[0]) + Number(str[1]));
    result.innerHTML = arr;
  }
}

function checkResult25() {
  let result = document.getElementById("r25");
  let arr = [];
  for (let i = 10; i <= 1000; i++) {
    let str = String(i);
    if (str[0] === "1") {
      arr.push(i);
    }
    result.innerHTML = arr;
  }
}

function checkResult26() {
  let result = document.getElementById("r26");
  let arr = [];
  for (let i = 10; i <= 1000; i++) {
    let str = String(i);
    if (Number(str[0]) + Number(str[1]) == 5) {
      arr.push(i);
    }
    result.innerHTML = arr;
  }
}

function checkResult27() {
  let result = document.getElementById("r27");
  let str = String();
  for (let i = 1; i <= 9; i++) {
    for (j = 1; j <= 3; j++) {
      str += i;
      result.innerHTML = str;
    }
  }
}

function checkResult28() {
  let result = document.getElementById("r28");
  let str = String();

  for (let i = 1; i <= 3; i++) {
    for (j = 1; j <= 3; j++) {
      str += String(i) + String(j) + " ";
    }
  }
  result.innerHTML = str;
}

function checkResult29() {
  let result = document.getElementById("r29");
  let arr = ["a", "b", "c", "d", "e"];
  flag = false;

  for (let elem of arr) {
    if (elem === "c") {
      flag = true;
      break;
    }
  }
  if ((flag = true)) {
    result.innerHTML = "+++";
  } else if ((flag = false)) {
    result.innerHTML = "---";
  }
}

function checkResult30() {
  let result = document.getElementById("r30");
  let value = Number(document.getElementById("t30").value);

  if (value % 1 == 0 && value % value == 0) {
    result.innerHTML = "Простое";
  } else {
    result.innerHTML = "Не простое";
  }
}

window.onload = function () {
  let codeBox1 = document.getElementById("code1");
  codeBox1.innerHTML = checkResult8.toString();

  let codeBox19 = document.getElementById("code19");
  codeBox19.innerHTML = checkResult19.toString();

  let codeBox20 = document.getElementById("code20");
  codeBox20.innerHTML = checkResult20.toString();

  let codeBox21 = document.getElementById("code21");
  codeBox21.innerHTML = checkResult21.toString();

  let codeBox22 = document.getElementById("code22");
  codeBox22.innerHTML = checkResult22.toString();

  let codeBox23 = document.getElementById("code23");
  codeBox23.innerHTML = checkResult23.toString();

  let codeBox24 = document.getElementById("code24");
  codeBox24.innerHTML = checkResult24.toString();

  let codeBox25 = document.getElementById("code25");
  codeBox25.innerHTML = checkResult25.toString();

  let codeBox26 = document.getElementById("code26");
  codeBox26.innerHTML = checkResult26.toString();

  let codeBox27 = document.getElementById("code27");
  codeBox27.innerHTML = checkResult27.toString();

  let codeBox28 = document.getElementById("code28");
  codeBox28.innerHTML = checkResult28.toString();

  let codeBox29 = document.getElementById("code29");
  codeBox29.innerHTML = checkResult29.toString();

  let codeBox30 = document.getElementById("code30");
  codeBox30.innerHTML = checkResult30.toString();
};
