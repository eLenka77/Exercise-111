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
