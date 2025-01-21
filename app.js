let listaAmigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    // Obtém o valor do input
    let inputAmigo = document.getElementById('amigo');
    let nomeAmigo = inputAmigo.value.trim();

    // Verifica se o nome não está vazio
    if (nomeAmigo) {
        // Adiciona o nome à lista de amigos
        listaAmigos.push(nomeAmigo);

        // Atualiza a exibição da lista
        atualizarListaAmigos();

        // Limpa o campo de input
        inputAmigo.value = '';
    } else {
        alert('Por favor, digite um nome.');
    }
}

// Função para atualizar a exibição da lista de amigos
function atualizarListaAmigos() {
    let ulListaAmigos = document.getElementById('listaAmigos');
    ulListaAmigos.innerHTML = '';

    // Adiciona cada amigo como um item da lista
    listaAmigos.forEach(function(amigo) {
        let li = document.createElement('li');
        li.textContent = amigo;
        ulListaAmigos.appendChild(li);
    });
}

// Função para sortear um amigo
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('A lista de amigos está vazia.');
        return;
    }

    // Sorteia um índice aleatório da lista
    let indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceSorteado];

    // Exibe o nome sorteado
    let ulResultado = document.getElementById('resultado');
    ulResultado.innerHTML = `<li>Amigo sorteado: ${amigoSorteado}</li>`;
}