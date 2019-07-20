/*
Promisses são códigos (funções) que não influenciam na linha do tempo de excução do código JS.
Devolvem o valor de resultado, seja sucesso ou erro, depois de um tempo de mod oque não tenhamos 
que nos preocupar com ele. 
*/

var minhaPromise = function(){ //Cria-se uma função normal
    return new Promise(function(resolve, reject){   //Dentro dela se bota um return do objeto Promise. 
        var xhr = new XMLHttpRequest();             //O resolve e reject são funções passadas como parâmetro. 
                                                    //No console.log pode-se constatar que ambas são funções.
                                                    //O resolve é usado quando o resultado obtido da promise 
                                                    //for de sucesso e o reject quando for de falha.
        xhr.open('GET','https://api.github.com/users/Gwolner');
        xhr.send(null);

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText)); //Para o caso do resultado retornado ser de sucesso!!!    
                }else{
                    reject('Erro na requisição');
                }
            }
        }
    });

}

var res = minhaPromise();
console.log(res);   //Na promesis não se faz uso deste tipo de estrutura para obter o resultado
                    //A requisição sempre ficará como "pending" (pendente).    

minhaPromise() // Esta é a estrutura correta de tratar o retorno da promises.
    .then(function(response){ //Método THEN para caso de retorno Ok (status 200).
        console.log(response); //O que ocorre se o retorno for Ok.
    })
    .catch(function(error){ //Método CATCH para caso de erro no retorno (status diferente de 200).
        console.warn(error) //O que ocorre se retornar um erro.
    });