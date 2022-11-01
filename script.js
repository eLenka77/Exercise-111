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

window.onload = function () {
  let codeBox1 = document.getElementById("code1");
  codeBox1.innerHTML = checkResult8.toString();
};

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
