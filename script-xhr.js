/*
    Servidor usado para testes: https://api.github.com/users/Gwolner 
*/
var xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.github.com/users/gwolner");

xhr.send(null);

//Monitora mudança de status da requisição assincrona:
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {//4 é o valor de quando há retorno/ resposta do servidor.

    console.log(JSON.parse(xhr.responseText));
    //O xhr.responseText retorna um JSON, por isto está dentro do JSON.parse().  
  }
};
