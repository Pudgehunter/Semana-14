const database = firebase.database();
const auth = firebase.auth();

const nombre = document.getElementById('nombre');
const title = document.getElementById('title');
const logOutBtn = document.getElementById('logOutBtn');
const agrBtn = document.getElementById('agrBtn');

let idContacts;

auth.onAuthStateChanged(
    (user)=> {

        idContacts = user.uid;
        
        if(user !== undefined){

            console.log(user.uid);
            database.ref('semana14/users/'+idContacts).once(
                'value',
                (data)=>{
                    let userDB = data.val();
                    title.innerHTML = 'Bienvenido ' + userDB.nombre;
                    nombre.innerHTML = userDB.nombre;
                }
            )
        }
    }
);


logOutBtn.addEventListener('click', ()=>{
    auth.signOut().then(
        ()=> {
            window.location.href = 'logIn.html';
        }
    ).catch(
        (error) => {
            alert(error.message);
        }
    );
});

agrBtn.addEventListener('click', ()=>{
    window.location.href = 'contactos.html';
})



//Pintar las tarjetas de los contactos que se agregan.
