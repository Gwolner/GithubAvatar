# Exibir avatar de usuários do Github

Aplicação web que foca no uso de diferentes formas de requisições assíncronas para que, a partir de um username do Github, possa ser exibido o avatar do respectivo usuário. O objetivo é observar que apenas o avatar é carregado, sem interferir nos demais elementos presentes na página como ocorre em alguns sites, em que toda a página é recarregada para se exibir um conteúdo atualizado.

## Uso do AJAX

Trata-se de uma adaptação das prática elaborada no treinamento de AJAX da [Rocketseat](https://rocketseat.com.br/). Os tipos de requisições AJAX usados para exibir o avatar fazem uso do XMLHttpRequest, Promises e API Axios em momentos distíntos e de forma editável via código a fim de observar o comportamento, bastante similar, entre os tipos.

## Alternando entre tipos de requisições

No arquivo index.html, antes do fechamento da tag body, existe uma área reservada para importar o arquivo AJAX que se deseja utilizar para carregar o avatar.

```
17. <!-- Importações JS abaixo-->
18. 
19. 
```

A linha 18 será usada para importar os arquivos avatarXhr.js e avatarPromises.js, já o arquivo   

* Uso do XMLHttpRequest

Na linha 18, adicionar o arquivo avatarXhr.js.
```
<script src="avatarXhr.js"></script>
```

* Uso das Promises

Na linha 18, adicionar o arquivo avatarXhr.js.

```
<script src="avatarPromises.js"></script>
```

* Usando API Axios

Importar o arquivo axios.min.js na linha 18 e o arquivo avatarAxios.js na linha 19 conforme abaixo.
```
<script src='https://unpkg.com/axios/dist/axios.min.js'></script>
<script src="avatarXhr.js"></script>
```
Essa ordem é <b>importante</b>, pois primeiro deverá ser carregado a API Axios para depois ser carregado o código que faz uso dela.

## Entendendo o código

### Classe XMLHttpRequest

Objeto que dá acesso a funcionalidade do AJAX.
```
var xhr = new XMLHttpRequest();
```

Monta a requisição de dados do servidor. Primeiro o método e segundo a URL.
```
xhr.open("GET", "https://api.github.com/users/gwolner");
```

Envio da requisição montada acima. Como não vai enviar parâmetros adicionais, usá-se null.
```
xhr.send(null);
```

Monitora mudança de status da requisição assincrona:
```
xhr.onreadystatechange = function() { //Acionar uma função quando o status da requisição for atualizado.
  if (xhr.readyState === 4) { //4 é o valor de quando há resposta do servidor.
    console.log(JSON.parse(xhr.responseText)); //O xhr.responseText retorna um JSON.
  }
};
```

## Classe Promises

Cria-se uma função normal, mas com um return da classe Promise.
```
let myPromise = function() {
  return new Promise(function(resolve, reject) {
    
    //Código dentro da Promise
    
  });
}
```
O resolve e reject são funções referenciadas passadas como parâmetro.


O código dentro da Promise é um XMLHttpRequest, porém no seu If/Else usa-se as funções <b>resolve</b> e <b>reject</b> para tratar sucesso e falha, respectivamente, durante a requisição.

```
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            resolve("Requisição feita com sucesso!");
        } else {
            reject("Falha na requisição!");
        }
    }
};
```

Observe que a Promise foi criada, mas não chamada. Chamamos a Promisse como qualquer outra função.
``` 
myPromise()
```

Como mencionado anteriormente, a Promise lida com sucesso e falha e para isso a função chamada precisa fazer uso dos métodos THEN e CATCH.
```
myPromise()
  .then(function(resolve) {
      console.log("Avatar exibido!")
  })
  .catch(function(error) { //Método CATCH para caso de erro no retorno (status diferente de 200).
      console.warn("Nome de usuário não encontrado!");
  });
```
O método THEN trata do caso de sucesso (observe que ele tem uma referência à função resolve) e o CATH trata dos casos de falha (a referência à função reject não é explícita, pois recebe o nome de "error" e não de "reject").




## API Axios

Migrar comentários do código pra ca!


## No Google Chrome

Melhorar instrução abaixo sobre analise de requisições AJAX!

Na área de desenvolvedor, verificar a requisição na aba Network. 
O nome da requisição será exibido. Próximo a ela deverá ter a aba <b>Hearders</b> exibindo o status da requisição e na aba Preview pode-se ver o que foi retornado do servidor.

## No Mozilla

TESTAR AINDA E POR AQUI!!!....

