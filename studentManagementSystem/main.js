
//user inputs elements
const idInput = document.getElementById('idInput');
const nameInput = document.getElementById('nameInput');
const classInput = document.getElementById('classInput');
const ageInput = document.getElementById('ageInput');
const cityInput = document.getElementById('cityInput');
const gradeInput = document.getElementById('gradeInput');
const phoneInput = document.getElementById('phoneInput');
const addBtn = document.getElementById('addBtn');
const addStudentsBtn = document.getElementById('add-btn');
const studentsLists = document.querySelector('.students-lists');
const forms = document.querySelector('.forms');
const closeBtn = document.querySelector('#closeBtn');
closeBtn.addEventListener("click", () => {
    forms.classList.remove("active");
})

let students = [];
// add students
function addStudents() {
    //get usr inputs
    const studentId = idInput.value.trim();
    const studentName = nameInput.value.trim();
    const studentClass = classInput.value.trim();
    const studentAge = ageInput.value;
    const studentCity = cityInput.value.trim();
    const studentGrade = gradeInput.value;
    const studentPhone = phoneInput.value;
    //console.log(studentId, studentCity, studentClass,studentName)
    //validate
    if (!studentId || !studentName || !studentClass || !studentAge || !studentCity || !studentGrade || !studentPhone) {
        alert("you must fill  all inputs!")
        return
    }
    //add students
    students.push({
        id: studentId,
        name: studentName,
        age: studentAge,
        class: studentClass,
        city: studentCity,
        phone: studentPhone,
        grade: studentGrade
    })
    //clear inputs afer adding
    idInput.value = "";
    nameInput.value = "";
    classInput.value = "";
    ageInput.value = "";
    cityInput.value = "";
    gradeInput.value = "";
    phoneInput.value = "";

}
addBtn.addEventListener('click', (event) => {
    event.preventDefault();
    addStudents()
    studentsRender(students);
})

//students rendering
function studentsRender(array) {
    //clear
    studentsLists.innerHTML = "";
    //create tr
    array.forEach(student => {
        const trElement = document.createElement('tr');
        trElement.innerHTML = `
         <td>${student.id}</td>
        <td>${student.name}</td>
        <td>${student.class}</td>
        <td>${student.age}</td>
        <td>${student.city}</td>
        <td>${student.grade}</td>
        <td>${student.phone}</td>
        <td class="btns">
        <button class="editBtn">Edit</btutton>
        <button class="viewBtn">View</btutton>
        <button class="deleteBtn" data-id="${student.id}">Delete</btutton>
        </td>
        
        `;
        studentsLists.appendChild(trElement);
    });


}
studentsRender(students);
//addStudentsBtn
addStudentsBtn.addEventListener('click', () => {
    forms.classList.toggle('active');
})

// delete student
const deleteBtn=document.querySelectorAll('.deleteBtn');
 deleteBtn.forEach(button =>{
   button.addEventListener('click',(event)=>{
    const btnId=event.target.dataset.id;
    console.log(btnId)
   })
console.log(button)
 })




