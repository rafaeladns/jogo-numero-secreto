// Pegando o botão jogar novamente e adicionando a função para redirecionar para a página index.html
const btnJogarNovamente = document.getElementById('jogar-de-novo')
btnJogarNovamente.addEventListener('click', function() {
    window.location.href = 'index.html';
});
