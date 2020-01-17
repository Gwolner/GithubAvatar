# Pratica de AJAX <img src="img/rocketseat.png" width="160" height="40" align="right">

Prática elaborada no treinamento de AJAX da Rocketseat usando a classe XMLHttpRequest, Promises e API Axios.


## Exibir avatar de usuários do Github 

Add tambem sobre importar scripts JS no HTML. a ordem, qual é qual e pra que servem dirante os testes.

## Texto antigo...
Após abrir o arquivo HTML, a requisição será executada de forma assíncrona, portanto, o resultado da requisição poderá não estar disponível/visível antes do fim da execução do JS.

É PRECISO ATUALZIAR A PÁGINA para que os campos ná área de desenvolvedor (F12) possam exibir corretamente o resultado obtivo nos seus respectivos campos.

## Objeto XMLHttpRequest

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

## Promises

Migrar comentários do código pra ca!

## API Axios

Migrar comentários do código pra ca!


## No Google Chrome

Melhorar instrução abaixo sobre analise de requisições AJAX!

Na área de desenvolvedor, verificar a requisição na aba Network. 
O nome da requisição será exibido. Próximo a ela deverá ter a aba <b>Hearders</b> exibindo o status da requisição e na aba Preview pode-se ver o que foi retornado do servidor.

## No Mozilla

TESTAR AINDA E POR AQUI!!!....

