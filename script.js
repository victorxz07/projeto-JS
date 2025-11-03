// Variáveis
const jogo = 'Mini Jogo de Perguntas';
let pontuacao = 0;

// Função nomeada para perguntar
function perguntar(pergunta, respostaCorreta) {
    // A função prompt é usada para obter a resposta do usuário no navegador
    let resposta = prompt(pergunta);

    // Verifica se o usuário cancelou o prompt
    if (resposta === null) {
        console.log("Jogo interrompido pelo usuário.");
        return false; // Retorna falso para indicar interrupção
    }

    // Compara a resposta, ignorando maiúsculas/minúsculas
    if (resposta.toLowerCase() === respostaCorreta.toLowerCase()) {
        console.log("Acertou!");
        pontuacao++;
    } else {
        console.log(`Errou! A resposta correta era: ${respostaCorreta}`);
    }
    return true; // Retorna verdadeiro para indicar que a pergunta foi respondida
}

// Função para atualizar a pontuação na interface (opcional, mas bom para o novo modelo)
function atualizarInterface() {
    const scoreElement = document.getElementById('score');
    const statusElement = document.getElementById('status');
    if (scoreElement) {
        scoreElement.textContent = pontuacao;
    }
    if (statusElement) {
        statusElement.textContent = "Em andamento...";
    }
}

// Lógica principal do jogo
function iniciarJogo() {
    console.log(`Bem-vindo ao ${jogo}!`);
    alert(`Bem-vindo ao Mini Jogo de Perguntas!`);

    let iniciar = confirm("Quer começar o jogo?");

    if (!iniciar) {
        console.log("Usuário decidiu não jogar. Até a próxima!");
        const statusElement = document.getElementById('status');
        if (statusElement) {
            statusElement.textContent = "Encerrado";
        }
        return;
    }

    // Atualiza a interface ao iniciar
    atualizarInterface();

    // Array de perguntas e respostas para facilitar a adição de novas perguntas
    const perguntas = [
        // Perguntas originais
        { pergunta: "Qual a capital do Brasil?", resposta: "Brasília" },
        { pergunta: "Quantos dias tem uma semana?", resposta: "7" },
        { pergunta: "Qual é a cor do céu em um dia claro?", resposta: "Azul" },
        
        // 5 Novas perguntas
        { pergunta: "Qual o maior planeta do nosso sistema solar?", resposta: "Júpiter" },
        { pergunta: "Quem pintou a Mona Lisa?", resposta: "Leonardo da Vinci" },
        { pergunta: "Quantos lados tem um triângulo?", resposta: "3" },
        { pergunta: "Qual o elemento químico representado pela letra 'O'?", resposta: "Oxigênio" },
        { pergunta: "Em que ano o Brasil foi descoberto?", resposta: "1500" }
    ];

    let jogoContinuou = true;
    for (const item of perguntas) {
        jogoContinuou = perguntar(item.pergunta, item.resposta);
        if (!jogoContinuou) {
            break; // Sai do loop se o usuário interromper
        }
    }

    if (jogoContinuou) {
        console.log(`Fim do jogo! Sua pontuação: ${pontuacao}`);
        const statusElement = document.getElementById('status');
        if (statusElement) {
            statusElement.textContent = "Concluído";
        }
    }

    // Função anônima autoexecutável para mensagem final
    (function() {
        console.log("Obrigado por jogar! Até a próxima!");
    })();
}

// Inicia o jogo
iniciarJogo();
