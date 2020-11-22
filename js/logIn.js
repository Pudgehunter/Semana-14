const database = firebase.database();
const auth = firebase.auth();

const correo = document.getElementById('correoId');
const password = document.getElementById('passwordId');
const btnIngresar = document.getElementById('btnIngresar');

auth.onAuthStateChanged(
    (user)=>{
        if(user !== null){
            window.location.href = 'index.html';
        }
    }
);

btnIngresar.addEventListener('click', ()=>{
    auth.signInWithEmailAndPassword(correo.value, password.value).then(
        (data) => {
            window.location.href = 'index.html';
        }
    ).catch(
        (error) => {
            alert(error.message);
            console.log(error);
        }
    );
});