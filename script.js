function Converter() {
    var nota1 = parseInt(document.getElementById("nota1").value);
    var nota2 = parseInt(document.getElementById("nota2").value);
    var media = (nota1 + nota2)/2; 
    
    var calculaMedia = document.getElementById("exibirMedia");
     var mensgeMedia = "A média é : " + media;
    calculaMedia.innerHTML = mensgeMedia;
   
    
  }