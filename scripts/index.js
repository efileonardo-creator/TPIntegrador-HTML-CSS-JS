console.log("Se inicio el script.")

//Agregamos un listener para que se valide el form

const btnform = document.getElementById('botonform')
btnform.addEventListener('click', function(event){
    event.preventDefault();
    if (validarDatos()) {
        window.location.href = "pages/home.html";
    }
})

function validarDatos(){
    let esValido = true;
    //credenciales de prueba hardcodeadas
    const emailValido = "admin@admin.com";
    const pswValido = "12345";
    //elementos traidos del input del usuario en el form
    const usrEmail = document.getElementById('email').value;
    const usrPsw = document.getElementById('psw').value;
    ocultarError('emptyField');
    ocultarError('email');
    ocultarError('psw');
    if (usrEmail.length < 1 || usrPsw.length < 1){
        //control de inputs vacios
        mostrarError('emptyField', 'Los datos deben de estar completos, no vacíos.');
        esValido = false;
        //Validacion de credenciales
    } else if (usrEmail !== emailValido){
        mostrarError('email', 'Email no válido.' )
        esValido = false;
    } else if (usrPsw !== pswValido){
        mostrarError('psw', 'Contraseña no válida.' )
        esValido = false;
    } else {
        esValido = true;
    }
    return esValido;
}



function mostrarError (fieldId, mensaje){
    const errorElement = document.getElementById(fieldId + "_error")
    errorElement.textContent = "⚠️ " + mensaje;
    errorElement.style.display = 'block';


}

function ocultarError(fieldId){
    const errorElement = document.getElementById(fieldId + "_error");
    errorElement.style.display = 'none';
}

