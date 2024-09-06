const form = document.getElementById('form-atividade')
const imgAprovado = '<img src="./img/aprovado.png" alt="Emoji Aprovacao"/>';
const imgReprovado = '<img src="./img/reprovado.png" alt="Emoji Reprovado"/>';
const atividades = []; //iremos criar 2 arrays (tabelas) que vamos inserir os valores das linhas adcionadas
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'
const notaMinima = parseFloat(prompt("Digite a nota mínima")); // Deixa o usuaria escolher a media para aprovação


let linhas = ''; // cria uma variavel que pode inserir valores


form.addEventListener('submit', function(e)  {
    e.preventDefault();

    addLinha();
    atualizaTabela();
    atualizaMediaFinal()
})

function addLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');


    if (atividades.includes(inputNomeAtividade.value)) {  // verificação se a atividade já foi inserida
        alert(`A atividade: ${inputNomeAtividade.value} já foi inserida`)
    }
    else {
        atividades.push(inputNomeAtividade.value); // aqui eu estou incluindo os valores colocados pelo site dentro das arrays(tabelas)
        notas.push(parseFloat(inputNotaAtividade.value)); // parseFloat faz a string virar numero decimal
        
        let linha = '<tr>';5
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += '<tr>';

        linhas += linha;
        // += é a mesma coisa que linha = linha - 'valor"
        // {inputNotaAtividade.value >= 7 ? 'Aprovado' : 'Reprovado'} === Se (if = ?) for maior que 7 = Aprovado. Se não se (else = :) = Reprovado
    }

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();


    document.getElementById('media-final-valor').innerHTML = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;




}

function calculaMediaFinal() {
    let somaDasNotas = 0

    for (let i = 0; i <notas.length; i++) {
        somaDasNotas += notas[i];
    }

    // return somaDasNotas / notas.length
    return Number((somaDasNotas / notas.length).toFixed(1)); // faz com que nao deixe mais que 1 decimal apos a virgula
}