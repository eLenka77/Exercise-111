function checkResult1() {
  let value1 = document.getElementById("t1").value;
  let value2 = document.getElementById("t2").value;
  let result = document.getElementById("r1");
  let arr = [];
  for (let i = value1; i <= value2; i++) {
    arr.push(i);
  }
  result.innerHTML = arr;
}
