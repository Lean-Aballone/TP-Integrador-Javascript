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

        case '--Elegir Categoria--':
            return TICKET * cant;
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
UpdatePrecio();


document.querySelector("#cantidad").addEventListener("change",UpdatePrecio);


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

let primer_resumen = true;
const BTN_BORRAR = document.querySelector("#borrar");

BTN_BORRAR.addEventListener("click",function(){
    SELECT.selectedIndex = 0;
    ESTUDIANTE_BOX.classList.remove("box_selected","bx_s1");
    TRAINEE_BOX.classList.remove("box_selected","bx_s2");
    JUNIOR_BOX.classList.remove("box_selected","bx_s3");
    
    document.querySelectorAll("input").forEach(Element => {Element.value= ''});
    document.querySelector("#cantidad").value = 1;
    primer_resumen = true;
    UpdatePrecio();
});

const BTN_RESUMEN = document.querySelector("#resumen");
const PRINT = document.querySelector("#print");


function generar_ticket(){
    const input = document.querySelectorAll("input");
    let p = document.createElement("p");
    let hr = document.createElement("hr");
    PRINT.appendChild(hr);
    for(let i=0; i<3; i++){
        p = document.createElement("p");
        hr = document.createElement("hr");
        p.textContent = input[i].value
        PRINT.appendChild(p);
        PRINT.appendChild(hr);
    }


    hr = document.createElement("hr");
    p = document.createElement("p");
    p.textContent = "Precio: $" + PRECIO_TICKET;
    PRINT.appendChild(p);
    PRINT.appendChild(hr);

    hr = document.createElement("hr");
    p = document.createElement("p");
    p.textContent = "Cantidad: " + document.querySelector("#cantidad").value;
    PRINT.appendChild(p);
    PRINT.appendChild(hr);

    SELECT.options[SELECT.selectedIndex].text



    hr = document.createElement("hr");
    p = document.createElement("p");
    if ( SELECT.options[SELECT.selectedIndex].text === '--Elegir Categoria--'){
        p.textContent = "Categoria: Sin Categoria"
    }else{
        p.textContent = "Categoria: " + SELECT.options[SELECT.selectedIndex].text;
    }
    PRINT.appendChild(p);
    PRINT.appendChild(hr);


    p = document.createElement("p");
    p.textContent = "Precio Final: $" + PRECIO.innerHTML;
    PRINT.appendChild(p);



    primer_resumen = false;
}

BTN_RESUMEN.addEventListener("click",function(){

    if(primer_resumen){
        generar_ticket();
    }else{

        while(PRINT.firstChild){
            PRINT.removeChild(PRINT.lastChild);
        }

        primer_resumen = true;

    }
    
});