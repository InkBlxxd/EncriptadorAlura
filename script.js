

var letras_mayusculas="ABCDEFGHYJKLMNÑOPQRSTUVWXYZ";
    
 
function encriptarTexto() {
    var texto = document.getElementById("input-texto").value;
    for(i=0; i<texto.length; i++){
        if (letras_mayusculas.indexOf(texto.charAt(i),0)!=-1){
            alert("Ingrese solo minúsculas");
      } else {
   
    document.getElementById("msg").value = texto.replace(/e/g, "enter")
                                                .replace(/i/g, "imes")
                                                .replace(/a/g, "ai")
                                                .replace(/o/g, "ober")
                                                .replace(/u/g, "ufat");
    document.getElementById("input-texto").value = "";
}
    }
}
function desencriptarTexto() {
    var texto = document.getElementById("input-texto").value;
    for(i=0; i<texto.length; i++){
        if (letras_mayusculas.indexOf(texto.charAt(i),0)!=-1){
            alert("Ingrese solo minúsculas");
      } else {
    document.getElementById("msg").value = texto.replace(/enter/g, "e")
                                                .replace(/imes/g, "i")
                                                .replace(/ai/g, "a")
                                                .replace(/ober/g, "o")
                                                .replace(/ufat/g, "u");
    document.getElementById("input-texto").value = "";
}
    }
}
function copyToClipBoard() {

    var content = document.getElementById('msg');
    
    content.select();
    document.execCommand('copy');
    document.getElementById('msg').value="";
    
}

