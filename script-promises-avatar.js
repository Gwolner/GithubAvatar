//A promises é uma função assincrona, e como tal deve ter estrutura de uma e com return

// https://api.github.com/users/gwolner

var btn = document.getElementById("btn");

btn.onclick = function() {
    
    var username = document.getElementById("username").value;

    console.log(username);
    let myPromise = function() {
    return new Promise(function(resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "https://api.github.com/users/"+username);
        xhr.send(null);
        xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText));
            } else {
            reject("ERROR 500 Server internal error");
            }
        }
        };
    });
    };

    myPromise()
    .then(function(resolve) {
        console.log(resolve);

        let imgPhoto = document.getElementById("photo");
        imgPhoto.setAttribute("src", resolve.avatar_url);
    })
    .catch(function(error) {
        console.warn(error);
        alert("Nome de usuário não encontrado!");
    });
};
