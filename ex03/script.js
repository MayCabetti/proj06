let numeros = [];

for (let i = 0; i < 15; i++) {
    numeros[i] = Number(prompt(`Digite o ${i + 1}º número:`));
}

let vetorCompleto = "";
let posicoes = "";

for (let i = 0; i < 15; i++) {
    vetorCompleto += numeros[i] + " ";

    if (numeros[i] % 10 === 0) {
        posicoes += `Posição ${i} - Valor ${numeros[i]}\n`;
    }
}

alert("Vetor:\n" + vetorCompleto);

alert("Múltiplos de 10:\n" + posicoes);