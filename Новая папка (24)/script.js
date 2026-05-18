let playerScore = 0;
let computerScore = 0;

function play(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    document.getElementById("playerChoice").innerText = "ТВОЕ ОРУДИЕ ДЛЯ СРАЖЕНИЯ С Т1000: " + translate(playerChoice);
    document.getElementById("computerChoice").innerText = "Его орудие: " + translate(computerChoice);

    let result = "";

    if (playerChoice === computerChoice) {
        result = "Ничья!";
    } else if ((playerChoice === 'rock' && computerChoice === 'scissors') ||(playerChoice === 'paper' && computerChoice === 'rock') ||(playerChoice === 'scissors' && computerChoice === 'paper')) {
        result = "Ты выиграл!";
        playerScore++;
    } else {
        result = "Компьютер выиграл!";
        computerScore++;
    }

    document.getElementById("winner").innerText = result;
    document.getElementById("playerScore").innerText = playerScore;
    document.getElementById("computerScore").innerText = computerScore;
}

function translate(choice) {
    if (choice === 'rock') return "Камень";
    if (choice === 'paper') return "Бумага";
    if (choice === 'scissors') return "Ножницы";
}