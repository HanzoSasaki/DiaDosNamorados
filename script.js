const phrases = [
    "Você é a luz da minha vida.",
    "Meu amor por você é infinito.",
    "Você torna todos os meus dias melhores.",
    "Não consigo imaginar minha vida sem você.",
    "Cada momento ao seu lado é precioso para mim.",
    "Mesmo você sendo troll  n me vejo mais sem você",
    "O terror da minha ranqueada e o amor da minha vida",
    "Seu sorriso faz qualquer problema desaparecer ",
    "Te Amo cada dia que passa mais",
    "Você é meu maior orgulho",
    "Minha princesa",
    "Com você do meu lado n tem nada que me deixe desanimado",
    "Obrigado por existir, Feliz dia dos Namorados"
];

function showNewPhrase() {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    const message = phrases[randomIndex];
    const messageBox = document.getElementById("message");
    messageBox.innerHTML = message;

    // Adicionando efeito de surgir
    messageBox.style.opacity = "0";
    setTimeout(() => {
        messageBox.style.opacity = "1";
    }, 100);
}
