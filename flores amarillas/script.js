// Número de girasoles que quieres mostrar
const numSunflowers = 50;

// Contenedor de los girasoles
const container = document.getElementById('sunflower-container');

for (let i = 0; i < numSunflowers; i++) {
    // Crea un nuevo girasol
    const sunflower = document.createElement('div');
    sunflower.classList.add('sunflower');

    // Posición aleatoria
    const left = Math.random() * 100;
    const top = Math.random() * 100;

    // Aplica la posición al girasol
    sunflower.style.left = `${left}%`;
    sunflower.style.top = `${top}%`;

    // Agrega el girasol al contenedor
    container.appendChild(sunflower);
}
