var selectedRow = null;
function onSubmit(e) {
  event.preventDefault();
  let formData = readFormData();
  if (selectedRow === null) {
    insertData(formData);
  } else {
    update(formData);
  }
  reset();
}
// retrieve the data
function readFormData() {
  let formData = {};
  formData["productCode"] = document.getElementById("productCode").value;
  formData["productName"] = document.getElementById("productName").value;
  formData["quantity"] = document.getElementById("quantity").value;
  formData["price"] = document.getElementById("price").value;
  return formData;
}
// inset the data
function insertData(data) {
  let table = document
    .getElementById("storeList")
    .getElementsByTagName("tbody")[0];
  let newRow = table.insertRow(table.length);
  let cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.productCode;

  let cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.productName;

  let cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.quantity;

  let cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.price;

  let cell5 = newRow.insertCell(4);
  cell5.innerHTML = `<button type="button" class="btn btn-success" onClick="edit(this)">Edit</button>`;

  let cell6 = newRow.insertCell(5);
  cell6.innerHTML = `<button type="button" class="btn btn-danger" onClick="deleteData(this)">Delete</button>`;
}
//edit data
function edit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("productCode").value = selectedRow.cells[0].innerHTML;
  document.getElementById("productName").value = selectedRow.cells[1].innerHTML;
  document.getElementById("quantity").value = selectedRow.cells[2].innerHTML;
  document.getElementById("price").value = selectedRow.cells[3].innerHTML;
}
//update data
function update(formData) {
  selectedRow.cells[0].innerHTML = formData.productCode;
  selectedRow.cells[1].innerHTML = formData.productName;
  selectedRow.cells[2].innerHTML = formData.quantity;
  selectedRow.cells[3].innerHTML = formData.price;
}
//delete data
function deleteData(td) {
  if (confirm("Do you want to delete this row?!")) {
    row = td.parentElement.parentElement;
    document.getElementById("storeList").deleteRow(row.rowIndex);
  }
  reset();
}
//reset form
function reset() {
  document.getElementById("productCode").value = "";
  document.getElementById("productName").value = "";
  document.getElementById("quantity").value = "";
  document.getElementById("price").value = "";
}
