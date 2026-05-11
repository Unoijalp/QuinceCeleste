const urlBase = "https://script.google.com/macros/s/AKfycbxFTkcGdn_qPfAPqkhsDIh9he_TDgLdpJjgO5rQKd5XDEaVPn01nvP8TPBDv1g6psQu7Q/exec";

//Traer Lista para enviar Save The Date
async function cargarDatos() {

    let urlFetch = urlBase + "?codigo=a&respuesta=a&menu=3&telefono=a";
    console.log(urlFetch);
  const response = await fetch(urlFetch);
  const data = await response.json();

  const contenedor = document.getElementById("lista");

  data.forEach(([telefono, urlSTD, mensaje]) => {
    let params = new URL(urlSTD).searchParams;
    let fam = params.get("fam");

    console.log(fam);

    const item = document.createElement("button");
    item.innerHTML =  fam;
    item.id=telefono;
    item.addEventListener("click", () => {
        enviarWhatsApp(telefono, urlSTD, mensaje);
        });
    item.classList.add("btn-gold");
    contenedor.appendChild(item);
  });
}



async function enviarWhatsApp(telefono, link, mensaje){


    let params = new URL(link).searchParams;
    let fam = params.get("fam");
    let urlWA = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    // let mensaje=mensaje+ "\n" + link;
    
    urlWA = urlWA + "  \n " + encodeURIComponent(link);
    console.log("el link es: " + encodeURIComponent(link));


console.log("completo es: " + urlWA);


console.log("telefono: " + telefono);
    window.open(urlWA, '_blank');


    if(telefono===""){
      telefono="100000";
    }


    //Confirmar Envio de Save The Date por whatsapp
    let urlFetch = urlBase + "?codigo=a&respuesta=a&menu=4&telefono="+ telefono;
      const response = await fetch(urlFetch);
        const data = await response.text();

        console.log(data);

        cargarDatos();
}

cargarDatos();