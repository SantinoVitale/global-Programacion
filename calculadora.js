/*var math = require('math');
var plt = require('matplotlib.pyplot');
var np = require('numpy');*/
var ue = 0
var ud = 0
array = [[],[]];
while (caso == true) {
    m = parseFloat(prompt('Ingrese la masa del cuerpo (Kilogramos) '));
    f = parseFloat(prompt('Ingrese la fuerza aplicada al cuerpo (Newton)(Ingresar valor negativo (-) para mover el objeto en la direccion opuesta) '));
    g = 9.8;
    fx = f;
    pesoy = m * g;
    planoInc = prompt('¿El plano esta inclinado? (s/n) ').toLowerCase();
    if (planoInc == 's') {
        var inc;
        inc = parseInt(prompt('¿Cuantos grados(°) esta inclinado el plano? '));
        while (inc > 90 || inc < 0) {
            console.log('No es posible, ingrese otro valor ');
            inc = parseInt(prompt('¿Cuantos grados(°) esta inclinado el plano? '));
            fx = fx + m * g * math.sin(inc * math.pi / 180);
            pesoy = m * g * math.cos(inc * math.pi / 180);
        }
    }
    if (prompt('¿Hay friccion? (s/n) ').toLowerCase() == 's') {
        material = prompt('¿Que materiales componen a los cuerpos?\na. Madera sobre madera\nb. Acero sobre hielo\nc. Teflón sobre teflón\nd. Caucho sobre cemento seco\ne. Vidrio sobre vidrio\nf. Esquí sobre nieve\ng. Madera sobre cuero\nh. Aluminio sobre acero\ni. Articulaciones humanas\nj. Personalizado\n');
        if (material == 'a'){
            ue = 0.5;
            ud = 0.3;
        } else if (material == 'b'){
            ue = 0.03
            ud = 0.02;
        } else if (material == 'c'){
            ue = 0.04; 
            ud = 0.04;
        } else if (material == 'd'){
            ue = 1;
            ud = 0.8;
        } else if (material == 'e'){
            ue = 0.9; 
            ud = 0.4;
        } else if (material == 'f'){
            ue = 0.1;
            ud = 0.05;
        } else if (material == 'g'){
            ue = 0.5;
            ud = 0.4;
        } else if (material == 'h'){
            ue = 0.61;
            ud = 0.47;
        } else if (material == 'i'){
            ue = 0.02;
            ud = 0.003;
        } else if (material == 'j') {
            ue = parseFloat(prompt('Coeficiente de friccion estatico: '));
            ud = parseFloat(prompt('Coeficiente de friccion dinamico: '));
            var ffe = ue * pesoy;
            var ffd = ud * pesoy;
            var fuerzaNeta = fx - ffd;
        }
        if (ffe > abs(fx)) {
            console.log('Fuerza Aplicada:', f, 'Newton\nFuerza de Friccion Estatica:', ffe, 'Newton\nEste objeto no se mueve porque la friccion entre los cuerpos es muy grande');
            var a = 0;
            exit();
        } else {
          var a = fuerzaNeta / m;
          console.log('El objeto tiene una aceleracion de', a, 'm/s^2 (Valor positivo: movimiento -> Valor negativo: <-)');
        }
    } else {
        a = fx / m;
        console.log('El objeto tiene una aceleracion de', a, 'm/s^2 (Valor positivo: movimiento -> Valor negativo: <-)');
        if (a == 0) {
            console.log('Este objeto no se mueve');
        }
        if (prompt('¿Desea evaluar otro caso? (s/n) ') == 's'){
            caso = true;
        }
    }
}
