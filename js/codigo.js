var btnCripto = document.querySelector(".btn-encriptar");
var btnDescripto = document.querySelector(".btn-decriptar");
var btnCopiar = document.querySelector(".btn-copiar");
var containerSaida = document.querySelector(".box-out");
var containerSaidaResultado = document.querySelector(".resultado-box-out");
var letrasAcentuadas = /[áàâãéèêíïóôõöúçñ]+/i;

btnCripto.addEventListener("click", function(){
    var textoDigitado = document.querySelector("#entrada-cripto").value;
    var paragrafo = document.createElement("p");
    
    if(letrasAcentuadas.test(textoDigitado)){
        alert("Digitar apenas palavras sem acento!");
    } else if(textoDigitado != ""){
        paragrafo.textContent = criptografarTextoDigitado(textoDigitado.toLowerCase());
        containerSaida.style.display = "none";
        containerSaidaResultado.style.display = "block";
        containerSaidaResultado.appendChild(paragrafo);
    } else {
        alert("Campo vazio - Digite um texto a ser encriptado!");
    }
});

btnDescripto.addEventListener("click", function(){
    var textoDigitado = document.querySelector("#entrada-cripto").value;
    var paragrafo = document.createElement("p");
    
    if(letrasAcentuadas.test(textoDigitado)){
        alert("Digitar apenas palavras sem acento!");
    } else if(textoDigitado != ""){
        paragrafo.textContent = DescriptocriptografarTextoDigitado(textoDigitado.toLowerCase());
        containerSaida.style.display = "none";
        containerSaidaResultado.style.display = "block";
        containerSaidaResultado.appendChild(paragrafo);
    } else {
        alert("Campo vazio - Digite um texto a ser decriptado!");
    }
});

btnCopiar.addEventListener("click", function(){
    var campoResultado = document.querySelector(".resultado-box-out").textContent;
    navigator.clipboard.writeText(campoResultado);
});

//Função para decriptar
function DescriptocriptografarTextoDigitado(texto){
    const criptografiaTexto = ["enter", "imes", "ai", "ober", "ufat"];
    const descriptografiaTexto = ["e", "i", "a", "o", "u"];

     var resultadoDescripto = texto.replace(/enter|imes|ai|ober|ufat/gi, function(texto){
        if(texto == criptografiaTexto[0]){
            return descriptografiaTexto[0];
        } else if(texto == criptografiaTexto[1]){
            return descriptografiaTexto[1];
        } else if(texto == criptografiaTexto[2]){
            return descriptografiaTexto[2];
        } else if(texto == criptografiaTexto[3]){
            return descriptografiaTexto[3];
        } else if(texto == criptografiaTexto[4]){
            return descriptografiaTexto[4];
        }
    });

    return resultadoDescripto;
}

//Função para encriptar
function criptografarTextoDigitado(texto){
    const criptografiaTexto = ["enter", "imes", "ai", "ober", "ufat"];
    const descriptografiaTexto = ["e", "i", "a", "o", "u"];

     var resultadoCripto = texto.replace(/e|i|a|o|u/gi, function(texto){
        if(texto == descriptografiaTexto[0]){
            return criptografiaTexto[0];
        } else if(texto == descriptografiaTexto[1]){
            return criptografiaTexto[1];
        } else if(texto == descriptografiaTexto[2]){
            return criptografiaTexto[2];
        } else if(texto == descriptografiaTexto[3]){
            return criptografiaTexto[3];
        } else if(texto == descriptografiaTexto[4]){
            return criptografiaTexto[4];
        }
    });

    return resultadoCripto;
}