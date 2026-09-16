

const box=document.querySelector('.box');
const changeBtn=document.getElementById('changeBtn');
const resetBtn=document.getElementById('resetBtn');

// let state="first change"
// function firstChange(){
//     state="second change"
//     box.classList.add('active')
// }
// function secondChange(){
//     state="first change"
//     box.classList.remove('active')
// }
changeBtn.addEventListener('click',()=>{
    // if(state==="first change"){
    //     firstChange()
    // }else if(state==="second change"){
    //     secondChange()
        
    // }
    box.classList.toggle('active')
})
resetBtn.addEventListener('click', ()=>{
    box.classList.remove('active')
})