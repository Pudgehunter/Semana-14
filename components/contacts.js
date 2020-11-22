class contacts{


    constructor(contacto){
        this.contacto = contacto;
    }

    render = ()=>{
        let component = document.createElement('div');
        component.className = 'contactoClass';

        let nombreContacto = document.createElement('div');
        nombreContacto.innerHTML = this.contacto.nombree;
        let telefonoContacto = document.createElement('div');
        telefonoContacto.innerHTML = this.contacto.telefonoo;
        let deleteBtn = document.createElement('button');
        deleteBtn.className = 'deleteBtn';
        deleteBtn.innerHTML = 'X';

        component.appendChild(nombreContacto);
        component.appendChild(telefonoContacto);
        component.appendChild(deleteBtn);

        //Borrar btn
        const localstorage = window.localStorage;
        deleteBtn.addEventListener('click', ()=>{
            const database = firebase.database();
            let asdf = localstorage.getItem('clave')
            database.ref('semana14/contactos/'+asdf+'/'+this.contacto.id).set(null);
        });

        return component;
    }

}