/*
Promisses são funções que não influenciam na linha do tempo de excução do código JS.
Devolvem o valor de resultado, seja sucesso ou erro, depois de um tempo de modo que 
não tenhamos que nos preocupar com ele. 
*/

var minhaPromise = function(){ //Cria-se uma função normal, mas com um return da classe Promise

    return new Promise(function(resolve, reject){ //O resolve e reject são funções (referenciadas!!) passadas como parâmetro.
    //Resolve é usado quando o resultado obtido da promise for de sucesso e o reject quando for de falha. 
        
        //Uso da classe XMLHttpRequest com tratamento para sucesso e falha
        var xhr = new XMLHttpRequest();
        xhr.open('GET','https://api.github.com/users/gwolner');
        xhr.send(null);
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText)); //Para o caso de sucesso!!!    
                }else{
                    reject('Erro na requisição'); //Para o caso de falha!!!   
                }
            }
        }

    });
}

//Código para TESTAR o retorno de uma promise
var res = minhaPromise(); 
console.log(res); //A requisição sempre exibirá "pending" (pendente), pois foi executado o print do resultado antes de haver um.  

//Código REAL usado para tratar o retorno de uma promise
minhaPromise()
    .then(function(response){ //Método THEN para caso de retorno Ok (status 200).
        //O que ocorre se o retorno for Ok.
        console.log(response); 
    })
    .catch(function(error){ //Método CATCH para caso de erro no retorno (status diferente de 200).
         //O que ocorre se retornar um erro.
        console.warn(error)
    });
