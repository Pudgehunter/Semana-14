const database = firebase.database();
const auth = firebase.auth();

const nombre = document.getElementById('nombre');
const title = document.getElementById('title');
const logOutBtn = document.getElementById('logOutBtn');
const agrBtn = document.getElementById('agrBtn');


const estudianteContact = document.getElementById('estudianteContact');
let idContacts;

auth.onAuthStateChanged(
    
    (user)=> {

        idContacts = user.uid;
        console.log(user.uid);
        if(user !== undefined){

            console.log(user.uid);
            database.ref('semana14/users/'+idContacts).once(
                'value',
                (data)=>{
                    let userDB = data.val();
                    title.innerHTML = 'Bienvenido ' + userDB.nombre + ' ' + idContacts;

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

console.log(idContacts);

const localstorage = window.localStorage;
let asdf = localstorage.getItem('clave')
console.log(asdf);
database.ref('semana14/contactos/'+asdf).on('value', function(data){
    data.forEach(
        contacto => {
            let valor = contacto.val();
            let contactoTarjeta = new contacts(valor);
            estudianteContact.appendChild(contactoTarjeta.render());
        }
    )
});