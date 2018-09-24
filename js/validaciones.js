//seleccionar el formulario a travez de la id
var formulario = document.getElementById("form1");


//asociar funcion validar al hacer click

window.onload=iniciar;//sin parentesis

//funcion iniciar 
function iniciar(){

    document.getElementById("enviar").addEventListener('click',validar,false);
}

//seleccion de elementos 

function validaNombre(){

    var nombre=document.getElementById("nombre");
    if(nombre.value == ""){
        alert("Ingrese nombre");
        return false;
    }
    return true;
}


function validarCorreo(){

var correo=document.getElementById("correo").value;
var expresion = /\w+@\w+\.+[a-z]/;
if(correo.value ==""){

    alert("Ingrese correo electronico");
    return false;
}else if (!expresion.test(correo)) {

    alert("Ingrese correo valido");
    return false;


}
return true;
}

function validarRut(){

var correo= document.getElementById("rut");
if (!correo.checkValidity()){

    alert("Ingrese Rut valido");
    return false;
}
return true;
}

function validarVivienda(){

    
}

//funcion que valida elementos 
function validar(e){

    if(validaNombre()&&validarCorreo()&&validarRut()&&confirm("Registrando")){
        alert("Registro realizado");
        return true;
       
    }else{
        alert("Debe completar todas las casillas");
        e.preventDefault();
        
        return false;
    }
}

