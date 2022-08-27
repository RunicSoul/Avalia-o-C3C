//Math. sqrt() raiz quadrada, ** potenciação
const a = document.querySelector("#valora");
const b = document.querySelector("#valorb");
const c = document.querySelector("#valorc");
const res = document.querySelector("#resultado");
const btn = document.querySelector("#calcular");
let x = [1,2];




btn.onclick = () => {
    if(b.value**2 -(4*a.value*c.value) < 0){
        res.value = "Delta é negativo";
    } else {
        delta = b.value**2 -(4*a.value*c.value);
        x[0] = (-b.value + Math.sqrt(delta))/(2*a.value);
        x[1] = (-b.value - Math.sqrt(delta))/(2*a.value);
        res.value = `Os valores são ${x[0]} e ${x[1]}!`;
    }
}
