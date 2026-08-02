function login(){

let role=document.getElementById("role").value;

let user=document.getElementById("username").value;

let pass=document.getElementById("password").value;

if(role=="admin" && user=="admin" && pass=="1234"){

window.location.href="admin.html";

}

else if(role=="faculty" && user=="faculty" && pass=="1234"){

window.location.href="faculty.html";

}

else if(role=="student" && user=="student" && pass=="1234"){

window.location.href="student.html";

}

else{

alert("Invalid Login");

}

}
// Student Management

function addStudent(){

let name=document.getElementById("name").value;
let roll=document.getElementById("roll").value;
let department=document.getElementById("department").value;
let semester=document.getElementById("semester").value;
students.push({
name:name,
roll:roll,
department:department,
semester:semester
});

saveStudents();

if(name==""||roll==""||department==""||semester==""){
alert("Fill all fields");
return;
}

let table=document.getElementById("studentTable");

let row=table.insertRow();

row.insertCell(0).innerHTML=name;
row.insertCell(1).innerHTML=roll;
row.insertCell(2).innerHTML=department;
row.insertCell(3).innerHTML=semester;
row.insertCell(4).innerHTML="<button onclick='deleteStudent(this)'>Delete</button>";

document.getElementById("name").value="";
document.getElementById("roll").value="";
document.getElementById("department").value="";
document.getElementById("semester").value="";

}

function deleteStudent(btn){

let row=btn.parentNode.parentNode;

row.remove();

}

function searchStudent(){

let input=document.getElementById("search").value.toUpperCase();

let table=document.getElementById("studentTable");

let tr=table.getElementsByTagName("tr");

for(let i=1;i<tr.length;i++){

let td=tr[i].getElementsByTagName("td")[0];

if(td){

let txt=td.textContent;

if(txt.toUpperCase().indexOf(input)>-1){

tr[i].style.display="";

}else{

tr[i].style.display="none";

}

}

}

}function addFaculty(){

let name=document.getElementById("fname").value;
let id=document.getElementById("fid").value;
let subject=document.getElementById("subject").value;

if(name==""||id==""||subject==""){
alert("Fill all fields");
return;
}

let table=document.getElementById("facultyTable");

let row=table.insertRow();

row.insertCell(0).innerHTML=name;
row.insertCell(1).innerHTML=id;
row.insertCell(2).innerHTML=subject;
row.insertCell(3).innerHTML="<button onclick='deleteFaculty(this)'>Delete</button>";

document.getElementById("fname").value="";
document.getElementById("fid").value="";
document.getElementById("subject").value="";

}

function deleteFaculty(btn){

btn.parentNode.parentNode.remove();

}

function searchFaculty(){

let input=document.getElementById("searchFaculty").value.toUpperCase();

let table=document.getElementById("facultyTable");

let tr=table.getElementsByTagName("tr");

for(let i=1;i<tr.length;i++){

let td=tr[i].getElementsByTagName("td")[0];

if(td){

let txt=td.textContent;

if(txt.toUpperCase().indexOf(input)>-1){

tr[i].style.display="";

}else{

tr[i].style.display="none";

}

}

}

}
function addDepartment(){

let code=document.getElementById("deptCode").value;
let name=document.getElementById("deptName").value;

if(code=="" || name==""){
alert("Fill all fields");
return;
}

let table=document.getElementById("departmentTable");

let row=table.insertRow();

row.insertCell(0).innerHTML=code;
row.insertCell(1).innerHTML=name;
row.insertCell(2).innerHTML="<button onclick='deleteDepartment(this)'>Delete</button>";

document.getElementById("deptCode").value="";
document.getElementById("deptName").value="";

}

function deleteDepartment(btn){

btn.parentNode.parentNode.remove();

}

function searchDepartment(){

let input=document.getElementById("searchDept").value.toUpperCase();

let table=document.getElementById("departmentTable");

let tr=table.getElementsByTagName("tr");

for(let i=1;i<tr.length;i++){

let td=tr[i].getElementsByTagName("td")[1];

if(td){

let txt=td.textContent;

if(txt.toUpperCase().indexOf(input)>-1){

tr[i].style.display="";

}else{

tr[i].style.display="none";

}

}

}

}
function addSubject(){

let code=document.getElementById("subCode").value;
let name=document.getElementById("subName").value;
let sem=document.getElementById("semester").value;

if(code=="" || name=="" || sem==""){
alert("Fill all fields");
return;
}

let table=document.getElementById("subjectTable");

let row=table.insertRow();

row.insertCell(0).innerHTML=code;
row.insertCell(1).innerHTML=name;
row.insertCell(2).innerHTML=sem;
row.insertCell(3).innerHTML="<button onclick='deleteSubject(this)'>Delete</button>";

document.getElementById("subCode").value="";
document.getElementById("subName").value="";
document.getElementById("semester").value="";

}

function deleteSubject(btn){

btn.parentNode.parentNode.remove();

}

function searchSubject(){

let input=document.getElementById("searchSubject").value.toUpperCase();

let table=document.getElementById("subjectTable");

let tr=table.getElementsByTagName("tr");

for(let i=1;i<tr.length;i++){

let td=tr[i].getElementsByTagName("td")[1];

if(td){

let txt=td.textContent;

if(txt.toUpperCase().indexOf(input)>-1){

tr[i].style.display="";

}else{

tr[i].style.display="none";

}

}

}

}
function addAttendance(){

let name=document.getElementById("studentName").value;
let date=document.getElementById("date").value;
let status=document.getElementById("status").value;

if(name==""||date==""||status==""){
alert("Fill all fields");
return;
}

let table=document.getElementById("attendanceTable");

let row=table.insertRow();

row.insertCell(0).innerHTML=name;
row.insertCell(1).innerHTML=date;
row.insertCell(2).innerHTML=status;
row.insertCell(3).innerHTML="<button onclick='deleteAttendance(this)'>Delete</button>";

document.getElementById("studentName").value="";
document.getElementById("date").value="";
document.getElementById("status").value="";

}

function deleteAttendance(btn){

btn.parentNode.parentNode.remove();

}

function searchAttendance(){

let input=document.getElementById("searchAttendance").value.toUpperCase();

let table=document.getElementById("attendanceTable");

let tr=table.getElementsByTagName("tr");

for(let i=1;i<tr.length;i++){

let td=tr[i].getElementsByTagName("td")[0];

if(td){

let txt=td.textContent;

if(txt.toUpperCase().indexOf(input)>-1){

tr[i].style.display="";

}else{

tr[i].style.display="none";

}

}

}

}
function addTimetable(){

let day=document.getElementById("day").value;
let subject=document.getElementById("subject").value;
let faculty=document.getElementById("faculty").value;
let time=document.getElementById("time").value;

if(day==""||subject==""||faculty==""||time==""){
alert("Fill all fields");
return;
}

let table=document.getElementById("timeTable");

let row=table.insertRow();

row.insertCell(0).innerHTML=day;
row.insertCell(1).innerHTML=subject;
row.insertCell(2).innerHTML=faculty;
row.insertCell(3).innerHTML=time;
row.insertCell(4).innerHTML="<button onclick='deleteTimetable(this)'>Delete</button>";

document.getElementById("day").value="";
document.getElementById("subject").value="";
document.getElementById("faculty").value="";
document.getElementById("time").value="";

}

function deleteTimetable(btn){

btn.parentNode.parentNode.remove();

}

function searchTimetable(){

let input=document.getElementById("searchTime").value.toUpperCase();

let table=document.getElementById("timeTable");

let tr=table.getElementsByTagName("tr");

for(let i=1;i<tr.length;i++){

let td=tr[i].getElementsByTagName("td")[1];

if(td){

let txt=td.textContent;

if(txt.toUpperCase().indexOf(input)>-1){

tr[i].style.display="";

}else{

tr[i].style.display="none";

}

}

}

}
let students = JSON.parse(localStorage.getItem("students")) || [];

function saveStudents() {
    localStorage.setItem("students", JSON.stringify(students));
}

function loadStudents() {

    let table = document.getElementById("studentTable");

    if (!table) return;

    for (let i = 0; i < students.length; i++) {

        let row = table.insertRow();

        row.insertCell(0).innerHTML = students[i].name;
        row.insertCell(1).innerHTML = students[i].roll;
        row.insertCell(2).innerHTML = students[i].department;
        row.insertCell(3).innerHTML = students[i].semester;
        row.insertCell(4).innerHTML =
        "<button onclick='this.parentElement.parentElement.remove()'>Delete</button>";

    }

}

window.onload = loadStudents;