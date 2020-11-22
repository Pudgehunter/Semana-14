const database = firebase.database();
const auth = firebase.auth();

const nombre = document.getElementById('nombreId');
const telefono = document.getElementById('telefonoId');
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
    let reference = database.ref('semana14/users/'+iddd+'/contactos/').push();
    let userDB = {
        id: reference.key,
        nombre: nombre.value,
        telefono: telefono.value,
    };
    reference.set(userDB).then(
        () => {
            window.location.href = 'index.html';
        }
    ); 
});