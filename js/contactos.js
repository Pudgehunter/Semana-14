const database = firebase.database();
const auth = firebase.auth();

const nombree = document.getElementById('nombreIdContacto');
const telefonoo = document.getElementById('telefonoIdContacto');
const agreBtn = document.getElementById('agrBtn');

var agregarContacto = false;
let iddd;

auth.onAuthStateChanged(
    (user) => {
       iddd = user.uid;
    }
);

agreBtn.addEventListener('click', ()=>{
    console.log(iddd);
    let reference = database.ref('semana14/contactos/'+iddd+'/').push();
    let userDB = {
        id: reference.key,
        nombree: nombree.value,
        telefonoo: telefonoo.value,
    };
    reference.set(userDB).then(
        () => {
            const localstorage = window.localStorage;
            localStorage.setItem('clave',iddd);
            window.location.href = 'index.html';
        }
    ); 
});