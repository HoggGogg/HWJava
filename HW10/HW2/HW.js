const someForm = document.forms.someForm;


// const sendValue = someForm.sendBtn;
// // sendValue.addEventListener('click', () => {
// //
// // } )
const target = document.getElementById('target');
someForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameValue = someForm.name.value;
    const surnameValue = someForm.surname.value;
    const ageValue = someForm.age.value;
    let obj = {nameValue, surnameValue, ageValue}
    target.innerText = obj.nameValue + ' ' + obj.surnameValue + ' ' + obj.ageValue;
})


