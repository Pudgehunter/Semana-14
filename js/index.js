const database = firebase.database();
const auth = firebase.auth();


const nombre = document.getElementById('nombre');
const title = document.getElementById('title');
const logOutBtn = document.getElementById('logOutBtn');

auth.onAuthStateChanged(
    (user)=> {
        
        if(user !== undefined){

            console.log(user.uid);
            database.ref('semana14/users/'+user.uid).once(
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