// URL de ejemplo: https://ejemplo.com/?fam=Juan&num=25

// 1. Obtener la cadena de consulta (?fam=Juan&num=25)
const queryString = window.location.search;

// 2. Crear un objeto URLSearchParams
const urlParams = new URLSearchParams(queryString);

// 3. Obtener valores específicos
const urlFamilia = urlParams.get('fam');
const urlNumero = urlParams.get('num');


const divReserva = document.getElementById("reserva");
const divFamilia = document.getElementById('familia');
let divNumReservas ;


console.log(urlFamilia, urlNumero);

if (urlNumero == "1") {
    divReserva.innerHTML = "Tenemos reservado para ti <div id='numreserva'></div> lugar."
} else {
    divReserva.innerHTML = "Tenemos reservados para ti <div id='numreserva'></div> lugares."
}


divNumReservas = document.getElementById('numreserva');

divFamilia.textContent = urlFamilia;
divNumReservas.textContent = urlNumero;

/////////////////////////////////////////////////////////////////////////////////////////////
// LLuvia de brillos
const container = document.getElementById("goldRain");

/* 🔧 Ajusta aquí la cantidad de partículas */
const PARTICLE_COUNT = 100;

for (let i = 0; i < PARTICLE_COUNT; i++) {
  const p = document.createElement("div");
  p.classList.add("particle");

  // Tamaño aleatorio
  const size = Math.random() * 4 + 2; // 2px a 6px
  p.style.width = size + "px";
  p.style.height = size + "px";

  // Posición horizontal inicial
  p.style.left = Math.random() * 100 + "%";

  // Duración (velocidad)
  const duration = Math.random() * 5 + 5; // 5s a 10s
  p.style.animationDuration = `${duration}s, ${Math.random() * 2 + 1}s`;

  // Delay para que no caigan todas juntas
  p.style.animationDelay = `${Math.random() * 10}s`;

  // Desviación lateral
  const drift = (Math.random() - 0.5) * 100; // izquierda/derecha
  p.style.setProperty("--drift", drift + "px");

  container.appendChild(p);
}
/////////////////////////////////////////////////////////////////////////////////////////////