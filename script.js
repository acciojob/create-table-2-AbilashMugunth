const table = document.querySelector("#myTable");

function createTable() {
  let numRows = prompt("Input number of rows");
  let numCols = prompt("Input number of columns");

  for (let i = 0; i < numRows; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < numCols; j++) {
      let col = document.createElement("td");
      col.textContent = `Row-${i} Column-${j}`;
      row.appendChild(col);
    }
    table.appendChild(row);
  }
}
