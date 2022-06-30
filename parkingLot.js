window.addEventListener("DOMContentLoaded", (event) => {
  const calculation = document.querySelector("#calcBtn");
  calculation.addEventListener("click", calculateSum);
  const insertBtn = document.querySelector("#finalBtn");
  insertBtn.addEventListener("click", tableAdd);
});

function calculateSum() {
  const enterHour = document.querySelector("#enterHour").value;
  const hourOfLeaving = document.querySelector("#hourOfLeaving").value;

  const date1 = new Date(enterHour);
  const date2 = new Date(hourOfLeaving);
  if (date1 > date2) {
    window.alert("Incorrect Date or Time!");
  } else {
    var hours = Math.abs(date1 - date2) / 36e5;
    var roundedHour = Math.ceil(hours);
    var cost = roundedHour * 2.5;
    const output = document.querySelector("#output");
    output.innerHTML = `${cost} lv`;
  }
}

function tableAdd() {
  const model = document.querySelector("#carModel").value;
  const license = document.querySelector("#carReg").value;
  const enter = document.querySelector("#tableDateEntrance").value;
  const exit = document.querySelector("#tableDateExit").value;

  const table = document.querySelector("#tableBody");
  var rowCount = table.rows.length;
  var row = table.insertRow(rowCount);
  var num = row.insertCell(0);
  num.innerHTML = `${rowCount}`;
  var modelCell = row.insertCell(1);
  modelCell.innerHTML = `${model}`;
  var licenseCell = row.insertCell(2);
  licenseCell.innerHTML = `${license}`;
  var enterCell = row.insertCell(3);
  enterCell.innerHTML = `${enter}`;
  var exitCell = row.insertCell(4);
  exitCell.innerHTML = `${exit}`;

  var calCell = row.insertCell(5);
  calCell.innerHTML = `<button type="button" class="btn btn-dark" id="returnFromTable">Calculate</button>`;
  var calcFromTable = document.querySelector("#returnFromTable");
  calcFromTable.addEventListener("click", () => {
    const enterHour = document.querySelector("#enterHour");
    const hourOfLeaving = document.querySelector("#hourOfLeaving");
    enterHour.value = enter;
    hourOfLeaving.value = exit;
    calculateSum();
  });

  document.querySelector("#carModel").value = "";
  document.querySelector("#carReg").value = "";
  document.querySelector("#tableDateEntrance").value = "";
  document.querySelector("#tableDateExit").value = "";
}
