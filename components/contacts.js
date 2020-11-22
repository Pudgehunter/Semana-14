class contacts{

    constructor(contacto){
        this.contacto = contacto;
    }

    render = ()=>{
        let component = document.createElement('div');
        component.className = 'contactoClass';

        let nombreContacto = document.createElement('div');
        nombreContacto.innerHTML = this.contacto.nombre;
        let telefonoContacto = document.createElement('div');
        telefonoContacto.innerHTML = this.contacto.telefono;
        let deleteBtn = document.createElement('button');
        deleteBtn.className = 'deleteBtn';
        deleteBtn.innerHTML = 'X';

        component.appendChild(nombreContacto);
        component.appendChild(telefonoContacto);
        component.appendChild(deleteBtn);

        return component;
    }

}