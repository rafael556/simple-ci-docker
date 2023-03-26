function media(lista) {
    return (lista.reduce((a, b) => a + b, 0)) / lista.length;
}

module.exports = media;