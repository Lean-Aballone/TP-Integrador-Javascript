function CalcularDescuento(categoria, TICKET){
    let cant = Number(document.querySelector("#cantidad").value);

    if (cant > 99 || cant <= 0) {
        document.querySelector("#cantidad").value = 1;
        cant = Number(document.querySelector("#cantidad").value);
    }

    const DEST_ESTUDIANTE = 80 / 100;
    const DEST_TRAINEE = 50 / 100;
    const DEST_JUNIOR = 15 / 100;
    switch(categoria){
        case "Estudiante":
            return (TICKET - TICKET * DEST_ESTUDIANTE) * cant;
            break;

        case "Trainee":
            return (TICKET - TICKET * DEST_TRAINEE) * cant;            
            break;

        case "Junior":
            return (TICKET - TICKET * DEST_JUNIOR) * cant;            
            break;

        default:
            return " ";
    }
}

function UpdatePrecio(){
   /*  console.log(CalcularDescuento(SELECT.options[SELECT.selectedIndex].text)); */
    let categoria = SELECT.options[SELECT.selectedIndex].text;
    PRECIO.innerHTML = CalcularDescuento(categoria, PRECIO_TICKET);

    switch(SELECT.selectedIndex){
        case 1: 
            ESTUDIANTE_BOX.classList.add("box_selected","bx_s1");
            TRAINEE_BOX.classList.remove("box_selected","bx_s2");
            JUNIOR_BOX.classList.remove("box_selected","bx_s3");
            break;
            
        case 2:
            ESTUDIANTE_BOX.classList.remove("box_selected","bx_s1");
            TRAINEE_BOX.classList.add("box_selected","bx_s2");
            JUNIOR_BOX.classList.remove("box_selected","bx_s3");
            break;
        
        case 3: 
            ESTUDIANTE_BOX.classList.remove("box_selected","bx_s1");
            TRAINEE_BOX.classList.remove("box_selected","bx_s2");
            JUNIOR_BOX.classList.add("box_selected","bx_s3");
            break;
        default:
            ESTUDIANTE_BOX.classList.remove("box_selected","bx_s1");
            TRAINEE_BOX.classList.remove("box_selected","bx_s2");
            JUNIOR_BOX.classList.remove("box_selected","bx_s3");
        
    }
}

const PRECIO_TICKET = Number(document.querySelector("#ticket").innerHTML);
const SELECT = document.querySelector("#categoria");
const ESTUDIANTE_BOX= document.querySelector("#Estudiante");
const TRAINEE_BOX = document.querySelector("#Trainee");
const JUNIOR_BOX = document.querySelector("#Junior");
const PRECIO = document.querySelector("#precio");


SELECT.addEventListener("change",UpdatePrecio);
ESTUDIANTE_BOX.addEventListener("click",function(){
    if(SELECT.selectedIndex === 1){
        ESTUDIANTE_BOX.classList.remove("box_selected","bx_s1");
        SELECT.selectedIndex = 0;
        UpdatePrecio();
    }else {
        SELECT.selectedIndex = 1;
        UpdatePrecio();
    }
    
});

TRAINEE_BOX.addEventListener("click",function(){
    if(SELECT.selectedIndex === 2){
        TRAINEE_BOX.classList.remove("box_selected","bx_s2");
        SELECT.selectedIndex = 0;
        UpdatePrecio();
    }else {
        SELECT.selectedIndex = 2;
        UpdatePrecio();
    }
});

JUNIOR_BOX.addEventListener("click",function(){
    if(SELECT.selectedIndex === 3){
        JUNIOR_BOX.classList.remove("box_selected","bx_s3");
        SELECT.selectedIndex = 0;
        UpdatePrecio();
    }else {
        SELECT.selectedIndex = 3;
        UpdatePrecio();
    }
});


const BTN_BORRAR = document.querySelector("#borrar");

BTN_BORRAR.addEventListener("click",function(){
    SELECT.selectedIndex = 0;
    ESTUDIANTE_BOX.classList.remove("box_selected","bx_s1");
    TRAINEE_BOX.classList.remove("box_selected","bx_s2");
    JUNIOR_BOX.classList.remove("box_selected","bx_s3");
    UpdatePrecio();
    document.querySelectorAll("input").forEach(Element => {Element.value= ''});
    document.querySelector("#cantidad").value = 1;
});

/* const RESUMEN = document.querySelector(#) */