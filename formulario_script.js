

function validarFormulario() {
    var nombre = document.getElementById("nombre").value
    var apellido = document.getElementById("apellido").value
    var telefono = document.getElementById("telefono").value
    var email = document.getElementById("email").value
    var cometarios = document.getElementById("comentarios").value
    if (nombre === "" || apellido === "" || telefono === "" || email === "" || cometarios === "") {
         alert("Por favor, complete todos los campos del formulario.");
        return false;
    }

    for (var i = 0; i < nombre.length; i++) {
        var charCode = nombre.charCodeAt(i);
        if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
            alert("El campo 'nombre' solo puede contener caracteres alfabéticos y espacios.");
            return false;
        }
    }

    for (var i = 0; i < apellido.length; i++) {
        var charCode = apellido.charCodeAt(i);
        if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
            alert("El campo 'apellido' solo puede contener caracteres alfabéticos y espacios.");
            return false;
        }
    }

    if (telefono.length !== 10) {
        alert("Ingrese su número de contacto: la característica sin 0 (cero) y, si es celular, sin el número 15");
        return false;
    }
    for (var j = 0; j < telefono.length; j++) {
        var digit = telefono.charAt(j);
        if (digit < "0" || digit > "9") {
            alert("El campo 'teléfono' solo puede contener dígitos numéricos.");
            return false;
        }
    }
    alert("Formulario enviado correctamente.");
    return true;
}
