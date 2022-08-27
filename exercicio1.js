const ladoa = document.querySelector("#ladoa");
const ladob = document.querySelector("#ladob");
const ladoc = document.querySelector("#ladoc");
const tipo = document.querySelector("#tipoTriangulo");
const btn = document.querySelector("#verificar");

btn.onclick = () => {
    if(ladoa.value == "") {
        ladoa.focus();
    } else if(ladob.value == "") {
        ladob.focus();
    } else if(ladoc.value == "") {
        ladoc.focus();
    } else if(ladoa.value == ladob.value && ladob.value == ladoc.value){
        tipo.value ="Triangulo equilatero";
    } else if(ladoa.value == ladob.value || ladob.value == ladoc.value || ladoc.value == ladoa.value){
        tipo.value ="Triangulo isosceles";
    } else{
        tipo.value ="Triangulo escaleno";
    }
}




