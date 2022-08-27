const valor = document.querySelector("#valor");
const btn = document.querySelector("#rodar");
const result = document.querySelector("#resultado");
let i = 0;
let lista= [i]

btn.onclick = () => {
    while(i < valor.value){
        i++;
        lista.push(i);
        if(lista[i]%45 ==0){
             lista[i]="Luidy Moura";
        } else if(lista[i]%5 == 0){
             lista[i]= "Luidy";
        } else if(lista[i]%9 == 0){
             lista[i]= "Moura";
        } else{
             lista[i]= i;
        }

        result.value = lista;
    }
}


