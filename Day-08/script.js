
const namesList = document.getElementById('names-list');
const totalNames = document.getElementById('total');

let names = ['Ali', 'Hassan', 'Ahmed'];

names.forEach(name => {
    const element = document.createElement('p');
    element.textContent = name;
    namesList.appendChild(element);

})

totalNames.textContent = `total Names:${names.length}`;
