document.addEventListener("DOMContentLoaded", function() {
    const personagens = document.querySelectorAll(".personagem");

    personagens.forEach(personagem => {
        personagem.addEventListener("click", function() {
            alert("Você clicou em " + personagem.querySelector("h3").innerText);
        });
    });
});
