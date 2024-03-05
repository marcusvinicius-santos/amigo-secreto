let amigos = [];
reiniciar()

function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo');
    if (nomeAmigo.value == '') {
        alert('Por favor, informe o nome!');
        return;
    }

    if (amigos.includes(nomeAmigo.value)) {
        alert('Nome já adicionado!');
        return;
    }

    let listaAmigos = document.getElementById('lista-amigos');
    amigos.push(nomeAmigo.value);
    if (listaAmigos.textContent == '') {
        listaAmigos.textContent = nomeAmigo.value;
    } else {
        listaAmigos.textContent = listaAmigos.textContent + ', ' + nomeAmigo.value;
    }
    nomeAmigo.value = '';
}

function sortear() {
    if (amigos.length < 4) {
        alert('O número mínimo de amigos é 4!');
        return;
    }

    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br/>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br/>';
        }
    }

}

function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}