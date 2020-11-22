class contacts{

    constructor(contacto){
        this.contacto = contacto;
    }

    render = ()=>{
        let component = document.createElement('div');
        component.innerHTML = ('<p>'+component.nombre+'</p>');
        return component;
    }

}