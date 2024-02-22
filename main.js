document.addEventListener('DOMContentLoaded', function () {
    const nome = document.querySelector('#nome');
    const nomeUsuario = document.querySelector('#nome-usuario');
    const fotoPerfil = document.querySelector('#foto-perfil');
    const repositorios = document.querySelector('#repositorios');
    const seguidores = document.querySelector('#seguidores');
    const seguindo = document.querySelector('#seguindo');
    const linkPerfil = document.querySelector('#link');

    fetch('https://api.github.com/users/Jeymison')
        .then(function (res) {
            return res.json();
        })
        .then(function (json) {
            nome.innerText = json.name;
            nomeUsuario.innerText = json.login;
            fotoPerfil.src = json.avatar_url;
            seguindo.innerText = json.following;
            seguidores.innerText = json.followers;
            repositorios.innerText = json.public_repos;
            linkPerfil.href = json.html_url;
        })

})