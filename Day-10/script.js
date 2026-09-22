
const studentsList = document.getElementById('students-list');
const selectedStudent = document.getElementById('selected-student');

let students = [
    {
        name: 'Ali',
        age: 22
    },
    {
        name: 'Ahmed',
        age: 20
    },
    {
        name: 'Hassan',
        age: 19
    }

];

students.forEach(student => {
    const element = document.createElement('div');
    element.innerHTML = `
    <p>Name:${student.name}</p>
    <p>Age:${student.age}</p>
    `;
    // create btn
    const botton=document.createElement('button');
    botton.textContent="View"
   element.appendChild(botton);
   
    studentsList.appendChild(element);
    
//    event
botton.addEventListener('click',()=>{
    selectedStudent.textContent = `selected Student: ${student.name} ${student.age}`;

})


})


