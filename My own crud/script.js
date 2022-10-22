var selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }else{
        updateRecord(formData)
    }
    resetForm();
    }
//basahon ang data gamit ang functon s
    function readFormData(){
    var formData = {};
    formData["myList"] = document.getElementById("myList").value;
    formData["fName"] = document.getElementById("fName").value;
    formData["myEdad"] = document.getElementById("myEdad").value;
    formData["myUname"] = document.getElementById("myUname").value;
    formData["psw"] = document.getElementById("psw").value;
    return formData;
}
function insertNewRecord(data){
	var table = document.getElementById("crud").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.myList;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.fName;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.myEdad;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.myUname;
    var cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.psw;
    var cell5 = newRow.insertCell(5);
        cell5.innerHTML = `<a href="#" onClick='onEdit(this)'>Edit</a>
                        <a href="#" onClick='onDelete(this)'>Delete</a>`;
}
function resetForm(){
    document.getElementById('myList').value = '';
    document.getElementById('fName').value = '';
    document.getElementById('myEdad').value = '';
    document.getElementById('myUname').value = '';
    document.getElementById('psw').value = '';
    selectedRow = null;
}

// For Edit operation
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('myList').value = selectedRow.cells[0].innerHTML;
    document.getElementById('fName').value = selectedRow.cells[1].innerHTML;
    document.getElementById('myEdad').value = selectedRow.cells[2].innerHTML;
    document.getElementById('myUname').value = selectedRow.cells[3].innerHTML;
    document.getElementById('psw').value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.empCode;
    selectedRow.cells[2].innerHTML = formData.salary;
    selectedRow.cells[3].innerHTML = formData.city;
}
function onDelete(td){
    if(confirm('Are you sure you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('crud').deleteRow(row.rowIndex);
        resetForm();
    }    
}