/*  
AJAX é uma requisição assíncrona que realizamos à algum back-end.
Evita recarregar a página para trazer sempre novas requisições do servidor.

Servidor usado para testes: https://api.github.com/users/Gwolner 
*/

var xhr = new XMLHttpRequest(); //Classe acessa a funcionalidade AJAX para podermos recuperar informações do servidor.

xhr.open('GET','https://api.github.com/users/Gwolner'); //Montar requisição de dados do servidor.
xhr.send(null); //Envio da requisição montada acima. Como não vai enviar parâmetros, usá-se null.

xhr.onreadystatechange = function(){ //Acionar uma função quando o status atual da requisição for atualizado.
    if(xhr.readyState === 4){ //Caso o status mude para código 4 (retorno de requisição OK) faça...
        
        /*
        O xhr.responseText retorna um JSON, por isto está dentro do 
        JSON.parse(), para que a String seja exibida pelo console.log()
        */
        console.log(JSON.parse(xhr.responseText));
    }

}