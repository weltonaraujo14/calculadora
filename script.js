function insert(numero){
    let n = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = n + numero;
}

function limpar(){
    document.getElementById('resultado').innerHTML = '';
}

function back(){
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular(){
    let resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else{
        document.getElementById('resultado').innerHTML = 'Digite um valor';
    }
}