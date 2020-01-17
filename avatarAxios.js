/*
    AXIOS é uma API que deve ser declarada antes do script Javascript:

    1º)
    <script src='https://unpkg.com/axios/dist/axios.min.js'></script>

    2º)
	<script src="meu-axios.js"></script>

    Possui mais dados ao retornar sucesso do que a promises, sendo
    um XMLHttpRequest encapsulado que devolve sucesso (resolve) ou
    falha (error).
*/

let btn = document.getElementById("btn");

btn.onclick = function() {

    let username = document.getElementById("username").value;

    //No lugar de chamar uma função chama-se a API seguida do método de envio, passando a URL como parâmetro.
    axios.get("https://api.github.com/users/"+username) // Se precisar passar mais parâmetros deve-se usar virgula.
        .then(function(resolve){
            let imgPhoto = document.getElementById("photo");
            imgPhoto.setAttribute("src", resolve.data.avatar_url);
        })
        .catch(function(error){
            alert("Nome de usuário não encontrado!");
        });


}


