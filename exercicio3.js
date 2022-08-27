//  var n2 = parseInt(document.getElementById('n2').value, 10)
const nota = document.querySelector("#nota");
const btn = document.querySelector("#armazenar");
const resul = document.querySelector("#resultado");



btn.onclick = () => {
    if(nota.value < 0){
        resul.value = "Nota inválida"
    }else if(nota.value < 38){
        resul.value = `Reprovado com ${nota.value}!`;
    } else if(nota.value%5 == 3){
        valor1 = parseInt(nota.value) + 2;
        resul.value = `Aprovado com ${valor1}!`;
    } else if(nota.value%5 == 4){
        valor2 = parseInt(nota.value) + 1;
        resul.value = `Aprovado com ${valor2}!`;
    } else{
        resul.value = `Aprovado com ${nota.value}!`;
    }


   }
