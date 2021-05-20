window.addEventListener('load', () => {



const name = localStorage.getItem('NAME');
const password = localStorage.getItem('PASSWORD');

document.getElementById('resultname').innerHTML=name;
document.getElementById('resultpassword').innerHTML=password;



} )