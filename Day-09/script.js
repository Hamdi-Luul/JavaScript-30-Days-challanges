
const studentsList = document.getElementById('students-list');
const totalStudents = document.getElementById('total');

let students = [
  {
    name:'Ali',
    age:22
  },
  {
    name:'Ahmed',
    age:20
  },
  {
    name:'Hassan',
    age:19
  }

];

students.forEach(student => {
    const element = document.createElement('div');
    element.innerHTML=`
    <p>Name:${student.name}</p>
    <p>Age:${student.age}</p>
    
    
    `;
    studentsList.appendChild(element);

})

totalStudents.textContent = `Total Students:${students.length}`;
