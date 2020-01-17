/*
    Promisses são funções que não influenciam na linha do tempo de excução do código JS.
    Devolvem o valor de resultado, seja sucesso ou erro, depois de um tempo de modo que 
    não tenhamos que nos preocupar com ele. 
*/

let btn = document.getElementById("btn");

btn.onclick = function() {
    
    let username = document.getElementById("username").value;

    let myPromise = function() {  //Cria-se uma função normal, mas com um return da classe Promise.
        return new Promise(function(resolve, reject) { //O resolve e reject são funções (referenciadas!!) passadas como parâmetro.
            //Resolve é usado quando o resultado obtido da promise for de sucesso e o reject quando for de falha.

            let xhr = new XMLHttpRequest(); //Uso da classe XMLHttpRequest com tratamento para sucesso e falha.
            xhr.open("GET", "https://api.github.com/users/"+username);
            xhr.send(null);
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.responseText)); //Para o caso de sucesso.
                    } else {
                        reject("ERROR 500 Server internal error"); //Para o caso de falha.
                    }
                }
            };
        });
    };

    //Código usado para tratar o retorno de uma promise.
    myPromise()
        .then(function(resolve) { //Método THEN para caso de retorno Ok (status 200).
            let imgPhoto = document.getElementById("photo");
            imgPhoto.setAttribute("src", resolve.avatar_url);
        })
        .catch(function(error) { //Método CATCH para caso de erro no retorno (status diferente de 200).
            alert("Nome de usuário não encontrado!");
        });
};
