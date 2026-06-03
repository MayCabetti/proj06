let idades = [];
let resultado = "";

for (let i = 0; i < 7; i++) {
    idades.push(Number(prompt("Digite a idade:")));
}

for (let i = 0; i < 7; i++) {
    if (idades[i] > 25) {
        resultado += `Posição ${i} - Idade: ${idades[i]}\n`;
    }
}

alert("Maiores de 25 anos:\n\n" + resultado);