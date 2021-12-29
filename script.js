function Converter() {

    const nota1 = parseInt(document.getElementById("nota1").value);
    const nota2 = parseInt(document.getElementById("nota2").value);
    const media = (nota1 + nota2)/2; 
    
    const calculaMedia = document.getElementById("exibirMedia");
    
      if(media >= 7){
        const mensgeMedia = "A sua média foi : " + media + ", Parabéns !!! Você está aprovado";
        calculaMedia.innerHTML = mensgeMedia;
      
      }if(media < 7) {
        const mensgeMedia = "A média foi : " + media + " Você está reprovado";
        calculaMedia.innerHTML = mensgeMedia;
      }
    

}