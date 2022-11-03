const plano_si = document.getElementById("inclinado-si")
const plano_no = document.getElementById("inclinado-no")
const section_grades = document.querySelector(".section-grades")
const fr_si = document.getElementById("input-fr-si")
const fr_no = document.getElementById("input-fr-no")
const section_fr = document.querySelector(".section-fr")
const section_perso = document.querySelector(".container-personalized")
const input_cal = document.getElementById("input-cal")
const input_ue = +(document.getElementById("input_ue")).value
const input_ud = +(document.getElementById("input-ud")).value

const calculate = () =>{
    const input_kg = +(document.getElementById("input-kg")).value
    const input_nw = +(document.getElementById("input-nw")).value
    const input_grados = +(document.getElementById("input-grados")).value
    const gravedad = 9.8;
    let ue
    let ud  
    let pesoy = input_kg * gravedad * Math.cos(input_grados * Math.PI / 180)
    let fx = input_nw + input_kg * gravedad * Math.sin(input_grados * Math.PI / 180)
    let ffe = ue * pesoy
    let ffd = ud * pesoy
    let fuerzaNeta = fx - ffd
    if(ffe > fx){
        console.log('Fuerza Aplicada:' + f + 'Newton\nFuerza de Friccion Estatica:' + ffe + 'Newton\nEste objeto no se mueve porque la friccion entre los cuerpos es muy grande');
        a = 0
    } else {
        console.log(fuerzaNeta)
        console.log(input_kg)
        console.log(ue)
        console.log(ud)
        console.log(ffe)
        console.log(ffd)
        console.log(fuerzaNeta)
        a = fuerzaNeta / input_kg
        console.log('El objeto tiene una aceleracion de', a, 'm/s^2 (Valor positivo: movimiento -> Valor negativo: <-)')
    }
    if(a == 0){
        console.log("El objeto no se mueve")
    }

}

const show = (input) =>{
    input.style.display = "flex"
}

const dontShow = (input) =>{
    input.style.display = "none"
}

section_fr.addEventListener("click", (e) =>{
    e.preventDefault();
    const input_mats = document.getElementById("input-mats").value
    console.log(input_mats)
    if(input_mats == "10"){
        show(section_perso)
    } else{
        dontShow(section_perso)
    }
    switch(input_mats){
        case ("1"):
            ue = 0.5
            ud = 0.3
            break; 
        case ("2"):
            ue = 0.03
            ud = 0.02
            break;
        case("3"):
            ue = 0.04
            ud = 0.04
            break;
        case("4"):
            ue = 1
            ud = 0.8
            break;
        case("5"):
            ue = 0.9
            ud = 0.4
            break;
        case("6"):
            ue = 0.1
            ud = 0.05
            break;
        case("7"):
            ue = 0.5
            ud = 0.4
            break;
        case("8"):
            ue = 0.61
            ud = 0.47
            break;
        case("9"):
            ue = 0.02
            ud = 0.003
            break;
        case("10"):
            ue = +(input_ue)
            ud = +(input_ud)
            break;
    } 
})

plano_si.addEventListener("click", (e) =>{
    e.preventDefault();
    show(section_grades);
});
plano_no.addEventListener("click", (e)=>{
    e.preventDefault();
    dontShow(section_grades)  
})
fr_si.addEventListener("click", (e)=>{
    e.preventDefault();
    show(section_fr)  
})
fr_no.addEventListener("click", (e)=>{
    e.preventDefault();
    dontShow(section_fr)  
})

input_cal.addEventListener("click", (e) =>{
    e.preventDefault();
    calculate();
})


