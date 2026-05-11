// 1. Obtener la cadena de consulta (?fam=Juan&num=25)
const queryString = window.location.search;

// 2. Crear un objeto URLSearchParams
const urlParams = new URLSearchParams(queryString);

// 3. Obtener valores específicos
const urlFamilia = urlParams.get('fam');

const divFamiliaIntro = document.getElementById("familiaIntro");

divFamiliaIntro.textContent  = urlFamilia;


console.log("Pasa por acá");