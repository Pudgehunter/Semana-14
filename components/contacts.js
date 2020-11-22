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
        deleteBtn.addEventListener('click', ()=>{
            const database = firebase.database();
            database.ref('semana14/contactos/Kuoa1qzheRS9RzvWadMrlX3MbGR2/'+this.contacto.id).set(null);
        });

        return component;
    }

}