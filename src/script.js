const text = "Hello World!";
let index = 0;

function type() {
  if (index < text.length) {
    document.getElementById("typed-text").textContent += text.charAt(index);
    index++;
    setTimeout(type, 100); // Define a velocidade da digitação (150ms)
  }
}

window.onload = type; // Inicia o efeito de digitação após o carregamento da página
