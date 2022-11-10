const plano_si = document.getElementById("inclinado-si") // ! Selecciona la etiqueta del boton SI de si está inclinado
const plano_no = document.getElementById("inclinado-no") // ! Selecciona la etiqueta del boton NO de si está inclinado
const section_grades = document.querySelector(".section-grades") // ! Selecciona el div de grados
const fr_si = document.getElementById("input-fr-si") // ! Selecciona la etiqueta del boton SI de si hay friccion
const fr_no = document.getElementById("input-fr-no") // ! Selecciona la etiqueta del boton NO de si hay friccion
const section_fr = document.querySelector(".section-fr") // ! Selecciona el div de friccion
const section_perso = document.querySelector(".container-personalized") // ! Selecciona el div de friccion personalizado
const input_cal = document.getElementById("input-cal") // ! Selecciona el input de calcular

const calculate = () => { // ! Funcion para calcular todo
    const input_kg = +(document.getElementById("input-kg")).value // ! Toma el valor del input de masa
    const input_nw = +(document.getElementById("input-nw")).value // ! Toma el valor del input de la fuerza
    const input_grados = +(document.getElementById("input-grados")).value // ! Toma el valor del input de los grados
    const input_mats = document.getElementById("input-mats").value // ! Toma el valor del datalist de los materiales
    if (input_grados > -1 && input_grados < 90) {
        switch (input_mats) { // ! Switch para ver que hacer dependiendo cual material elige
            case ("0"): // ! Que hacer si selecciona el material de NADA
                ue = 0
                ud = 0
                break;
            case ("1"): // ! Que hacer si selecciona el material de MADERA SOBRE MADERA
                ue = 0.5
                ud = 0.3
                break;
            case ("2"): // ! Que hacer si selecciona el material de ACERO SOBRE HIELO
                ue = 0.03
                ud = 0.02
                break;
            case ("3"): // ! Que hacer si selecciona el material de TEFLON SOBRE TEFLON
                ue = 0.04
                ud = 0.04
                break;
            case ("4"): // ! Que hacer si selecciona el material de CAUCHO SOBRE CEMENTO
                ue = 1
                ud = 0.8
                break; // ! Que hacer si selecciona el material de VIDRIO SOBRE VIDRIO
            case ("5"):
                ue = 0.9
                ud = 0.4
                break; // ! Que hacer si selecciona el material de ESQUÍ SOBRE NIEVE
            case ("6"):
                ue = 0.1
                ud = 0.05
                break;
            case ("7"): // ! Que hacer si selecciona el material de MADERA SOBRE CUERO
                ue = 0.5
                ud = 0.4
                break;
            case ("8"): // ! Que hacer si selecciona el material de ALUMINIO SOBRE ACERO
                ue = 0.61
                ud = 0.47
                break;
            case ("9"): // ! Que hacer si selecciona el material de ARTICULACIONES HUMANAS
                ue = 0.02
                ud = 0.003
                break;
        }
        if (input_mats == "10") { // ! Que hacer si selecciona el material de PERSONALIZADO
            const input_ue = +(document.getElementById("input_ue")).value // ! Obtiene el valor introducido para UE
            const input_ud = +(document.getElementById("input-ud")).value // ! Obtiene el valor introducido para UD
            ue = +(input_ue)
            ud = +(input_ud)
        }
        let fx = input_nw // ! Cuenta para la fuerza en X
        const gravedad = 9.8; // ! Valor la gravedad
        let pesoy = input_kg * gravedad * Math.cos(input_grados * Math.PI / 180) // ! Calcula el peso en Y 
        fx = fx + input_kg * gravedad * Math.sin(input_grados * Math.PI / 180) // ! Calcula la fuerza en x 
        let ffe = ue * pesoy // ! Calcula el valor de la fuerza de friccion estatica
        let ffd = ud * pesoy // ! Calcula el valor de la fuerza de friccion dinamica
        let fuerzaNeta = fx - ffd // ! Calcula el valor de la fuerza Neta
        if (ffe > Math.abs(fx)) { // ! Si la fuerza de friccion estatica es mayor al VALOR ABOSOLUTO de la fuerza en X NO SE MUEVE
            let resNAc = 'Fuerza Aplicada: ' + input_nw + ' Newton\nFuerza de Friccion Estatica: ' + ffe.toFixed(2) + ' Newton Este objeto no se mueve porque la friccion entre los cuerpos es muy grande'
            response(resNAc) // ! Guarda la respuesta en una variable para mostrarla luego con DOM
            a = 0
        } else if (ffe < Math.abs(fx)) { // ! Si la fuerza de friccion estatica es menor al VALOR ABSOLUTO de la fuerza en X se mueve
            a = fuerzaNeta / input_kg // ! Calcula la aceleracion
            let resAc = 'El objeto tiene una aceleracion de ' + a.toFixed(2) + ' m/s^2 (Valor positivo: movimiento -> Valor negativo: <-)'
            response(resAc) // ! Guarda la respuesta en una variable para mostrarla luego con DOM
        }
    } else{
        Swal.fire({
            icon: 'error',
            title: 'ERROR!',
            text: 'Ingrese un valor de grados entre 0 y 90',
        })
    }

}

const response = (res) => { // ! DOM para mostrar la respuesta

    Swal.fire({
        icon: 'success',
        title: '¡Calculado correctamente!',
        text: res,
    })
    // clearResponse();
    // let container_res = document.querySelector(".res")
    // let responseDiv = document.createElement("p");
    // responseDiv.innerHTML = `${res}`;
    // container_res.appendChild(responseDiv);
    // responseDiv.style.animation = "fadeIn 1s"
    
}

/*const clearResponse = () => { // ! Funcion para borrar la respuesta anterior para que aparezca una nueva
    const responses = document.querySelector("#idResponse");
    while (responses.firstChild) {
        responses.removeChild(responses.firstChild);
    }
}*/

const show = (input) => { // ! Funcion para mostrar un contenedor
    input.style.animation = "fadeIn 1s"
    input.style.opacity = "1"
}

const dontShow = (input) => { // ! Funcion para NO mostrar un contenedor
    if (input.style.opacity == "0"){
        input.style.opacity = "0"
    } else{
        input.style.opacity = "0"
        input.style.animation = "fadeOut 1s"
    }
    
    
}

section_fr.addEventListener("click", (e) => { // ! Evento para saber que material de friccion está usando
    e.preventDefault();
    const input_mats = document.getElementById("input-mats").value
    console.log(input_mats)
    if (input_mats == "10") {
        show(section_perso)
    } else {
        dontShow(section_perso)
    }
})

plano_si.addEventListener("click", (e) => { // ! Evento para saber si se toca el boton SI de inclinacion
    e.preventDefault();
    show(section_grades);
});
plano_no.addEventListener("click", (e) => { // ! Evento para saber si se toca el boton NO de inclinacion
    e.preventDefault();
    dontShow(section_grades)
})
fr_si.addEventListener("click", (e) => { // ! Evento para saber si se toca el boton SI de friccion
    e.preventDefault();
    show(section_fr)
})
fr_no.addEventListener("click", (e) => { // ! Evento para saber si se toca el boton NO de friccion
    e.preventDefault();
    dontShow(section_fr)
    dontShow(section_perso)
})

input_cal.addEventListener("click", (e) => { // ! Saber si se toca el boton calcular
    e.preventDefault();
    calculate();
})


