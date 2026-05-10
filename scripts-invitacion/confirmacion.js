async function enviarDatos() {
    const valor1 = "ID123";
    const valor2 = "OK";


    const url = `https://script.google.com/macros/s/AKfycbxkIeIXAzelbTWPdnb3R9XEUagDyY2YLNeJAHV_jGEOErrBvg7h_HMYbDl0REsL7rHORA/exec?valor1=${encodeURIComponent(valor1)}&valor2=${encodeURIComponent(valor2)}`;

    try {
        const response = await fetch(url);
        const texto = await response.text();

        console.log("Respuesta:", texto);
    } catch (error) {
        console.error("Error:", error);
    }
}