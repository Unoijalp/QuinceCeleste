async function confirmarAsistencia(respuesta) {
    // 1. Obtener la cadena de consulta (?fam=Juan&num=25)
    const queryString = window.location.search;

    // 2. Crear un objeto URLSearchParams
    const urlParams = new URLSearchParams(queryString);
    let familia = urlParams.get("fam");


    const urlBase=`https://script.google.com/macros/s/AKfycbycmGbqDz0CzW9_8x-7tQ-tImVGgx9A-hQ70vWZJIqW3RZ5aGtNzHW8T0OM4RuNid2iQQ/exec?`;
    const url = urlBase + `menu=5&familia=${encodeURIComponent(familia)}&respuesta=${encodeURIComponent(respuesta)}`;

    try {
        const response = await fetch(url);
        const texto = await response.text();

        console.log("Respuesta:", texto);
    } catch (error) {
        console.error("Error:", error);
    }
}