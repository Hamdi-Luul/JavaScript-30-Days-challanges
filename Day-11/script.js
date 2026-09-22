
const studentsList = document.getElementById('students-list');
const totalStudent = document.getElementById('total-students');

let students = [
    {
        id: 1,
        name: 'Ali',
        age: 22
    },
    {
        id: 2,
        name: 'Ahmed',
        age: 20
    },
    {
        id: 3,
        name: 'Hassan',
        age: 19
    }

];

// render student into page
function render(array) {
    array.forEach(student => {
        const element = document.createElement('div');
        element.innerHTML = `
    <p>Name:${student.name}</p>
    <p>Age:${student.age}</p>
    <button data-id="${student.id}" class="delete">Delete</button>
    `;
        studentsList.appendChild(element);

    });

    // delete
    const botton = document.querySelectorAll('.delete')
    botton.forEach(button => {
        button.addEventListener('click', deleteStudent);

    })

    // total
    totalStudent.textContent = `Total students ${students.length}`;

};
render(students);
// delete studets from the page
function deleteStudent(event) {
    const targetId = Number(event.target.dataset.id);
    students = students.filter(student => student.id !== targetId);
    studentsList.innerHTML = "";
    render(students)

}

