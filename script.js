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
  let arr2 = [];

  for (let i = value1; i <= value2; i++) {
    total = arr.push(i);
    if (total % 2 === 0) {
      arr2.push(total);
    }
    result.innerHTML = arr2;
  }
}

function checkResult3() {
  let value1 = Number(document.getElementById("t1").value);
  let value2 = Number(document.getElementById("t2").value);
  let result = document.getElementById("r1");
  let arr = [];
  let arr2 = [];

  for (let i = value1; i <= value2; i++) {
    total = arr.push(i);
    if (total % 2 !== 0) {
      arr2.push(total);
    }
    result.innerHTML = arr2;
  }
}
