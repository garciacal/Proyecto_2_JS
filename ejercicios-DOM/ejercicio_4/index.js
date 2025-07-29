// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click

const Click = document.getElementById("btnToClick");

Click.addEventListener("click", function(evento) {
    console.log("Se ha pulsado el botón");
    console.log(evento); 
});

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

const eventofocus = document.querySelector(".focus");

eventofocus.addEventListener("focus", function(evento2) {
    console.log(evento2.target.value);
});

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

const eventovalue = document.querySelector(".value");

eventovalue.addEventListener("input", (evento3) => {
    console.log(evento3.target.value);
});