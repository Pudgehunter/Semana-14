const database = firebase.database();
const auth = firebase.auth();

const nombre = document.getElementById('nombreId');
const telefono = document.getElementById('numberId');
const correo = document.getElementById('correoId');
const password = document.getElementById('passwordId');
const confirmPassword = document.getElementById('confirmPasswordId');
const btnRegistrar = document.getElementById('btnRegistrar');

var isSigningUp = false;

auth.onAuthStateChanged(
    (user) =>{
        if(user !== null){
            if(isSigningUp){
                //Depositar los datos
                let userDB = {
                    id: user.uid,
                    nombre: nombre.value,
                    telefono: telefono.value,
                    correo: correo.value,
                    password: password.value
                };
                database.ref('semana14/users/'+userDB.id).set(userDB).then(
                    () => {
                        window.location.href = 'index.html';
                    }
                );
            }else{
                window.location.href = 'index.html';
            } 
        }
    }
);

btnRegistrar.addEventListener('click', ()=>{
    isSigningUp = true;
    auth.createUserWithEmailAndPassword(correo.value, password.value);
});