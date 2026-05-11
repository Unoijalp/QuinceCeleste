async function confirmarAsistencia(respuesta) {
    // 1. Obtener la cadena de consulta (?fam=Juan&num=25)
    const queryString = window.location.search;

    // 2. Crear un objeto URLSearchParams
    const urlParams = new URLSearchParams(queryString);
    let familia = urlParams.get("fam");

    const divSi = document.getElementById("si");
    const divNo = document.getElementById("no");
    const divConfirmando = document.getElementById("confirmando");
    const divConfirmado = document.getElementById("confirmado");

    divSi.style.display ="none";
    divNo.style.display ="none";
    divConfirmando.style.display ="flex";

    const urlBase=`https://script.google.com/macros/s/AKfycbycmGbqDz0CzW9_8x-7tQ-tImVGgx9A-hQ70vWZJIqW3RZ5aGtNzHW8T0OM4RuNid2iQQ/exec?`;
    const url = urlBase + `menu=5&familia=${encodeURIComponent(familia)}&respuesta=${encodeURIComponent(respuesta)}`;

    try {
        const response = await fetch(url);
        const texto = await response.text();

        if(respuesta ==="SI"){
            divConfirmado.textContent ="GRACIAS POR CONFIRMAR, NOS VERÉMOS ESTE DÍA TAN ESPECIAL"
        }else{
            divConfirmado.textContent ="GRACIAS POR CONFIRMAR, ENTENDEMOS QUE NO PUEDAS ACOMPAÑARNOS"
        }
        console.log("Respuesta:", texto);

    } catch (error) {

            divConfirmado.textContent ="Hubo un error de conexión, por favor intente de nuevo más tarde."

        console.error("Error:", error);
    }

        divConfirmando.style.display ="none";
        divConfirmado.style.display ="flex";
}