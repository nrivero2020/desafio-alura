const textArea = document.querySelector(".text-area");
const muneco = document.querySelector(".muneco");
const verEncriptado = document.querySelector(".izq")

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar() {
    const textoIngresado = textArea.value;
    textoValido = validarTxt(textoIngresado);
    if (textoValido) {
        const textoEncriptado = encriptar(textArea.value)
        verEncriptado.value = verTxtEncriptado(textoEncriptado);
    }
    textArea.value = "";
}

function verTxtEncriptado(texto) {
    const verEncriptado = document.getElementById("texto__encriptado");
    verEncriptado.innerHTML = `
    <p class="texto__encrip" id="textoEncript">${texto}</p>
    <button id="copiar" class="boton__copiar" onclick="btnCopiarEncript()">Copiar</button>
    `;
}
 

function encriptar(stringEncriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptado
}


function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value)
    textArea.value = "";
    verEncriptado.value = verTextDesencriptado(textoDesencriptado);
    console.log(textoDesencriptado);
}

function verTextDesencriptado(texto) {
    const verEncriptado = document.getElementById("texto__encriptado");
    verEncriptado.innerHTML = `
    <p class="texto__desencript" id="textoDesencriptado">${texto}</p>
    <button id="copiar" class="boton__copiar" onclick="btnCopiarDesencript()">Copiar</button>
    `;
}


function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptado
}


function btnCopiarEncript(){
    const textoCopiadoEncript = document.getElementById("textoEncript").textContent;
    const boton = document.getElementById("copiar");
    navigator.clipboard.writeText(textoCopiadoEncript);
    boton.textContent ="Texto Copiado!";
    limpiarEncript();
}

function btnCopiarDesencript(){
    const textoCopiadoDesencript = document.getElementById("textoDesencriptado").textContent;
    const boton = document.getElementById("copiar");
    navigator.clipboard.writeText(textoCopiadoDesencript);
    boton.textContent ="Texto Copiado!";
    limpiarEncript();

}

function limpiarEncript(){
   document.querySelector("#texto__encriptado p").textContent = "";
   
}


//Validaciones//

function validarTxt(texto) {
    console.log(texto);
    if (texto.trim() === "") {
        alert("No has ingresado un texto");
        return false;
    }
    else if (/[^a-z\s]/.test(texto)) {
        alert("El texto solo debe contener letras minúsculas y sin acentos.");
        return false;
    }
    return true;

}

console.table(matrizCodigo);