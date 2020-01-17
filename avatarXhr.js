let btn = document.getElementById("btn");

btn.onclick = function() {
  let username = document.getElementById("username").value;

  //Objeto responsável por tratar as requisções AJAX.
  let xhr = new XMLHttpRequest();

  //Abertura de comunicação com o servidor através do método e URL passados como parâmetros.
  xhr.open("GET", "https://api.github.com/users/"+username); 
  xhr.send(null); //Envio da requisição ao servidor. Neste caso, sem parâemtros adicionais (null).

  //Monitora mudança de status da requisição assincrona.
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) { //Status 4 indica resposta do servidor.
      if (xhr.status === 200) { //Status 200 indica sucesso. Outros valores, falha!
        let objJson = JSON.parse(xhr.responseText) //O xhr.responseText retorna um JSON.
        let imgPhoto = document.getElementById("photo");
        imgPhoto.setAttribute("src", objJson.avatar_url);
      } else {
        console.warn("Erro na requisição"); 
        alert("Nome de usuário não encontrado!");
      }
    }
  };
};
