// Datos de ejemplo de eventos
const eventData = {
    "evento1": {
        title: "Seminario Como Crear Obras Teatrales",
        date: "28 de Agosto de 2024",
        location: "Teatro Las 3 Casas",
        price: "$15",
        description: "Este seminario ofrece una oportunidad única para aprender cómo crear obras teatrales."
    },
    "evento2": {
        title: "Concierto Jerardo Morán",
        date: "13 de Agosto de 2024",
        location: "Plaza de Toros",
        price: "Entrada Gratis",
        description: "Concierto en vivo de Jerardo Morán, el rey de la música popular."
    },
    "evento3": {
        title: "Degustación Gourmet",
        date: "03 de Agosto de 2024",
        location: "Menestras del Negro",
        price: "$15",
        description: "Disfruta de una variedad de platillos gourmet de Menestras del Negro."
    }
};

// Función para cargar los detalles del evento basado en el ID pasado por la URL
function loadEventDetails() {
    const params = new URLSearchParams(window.location.search);
    const eventId = params.get('id');

    if (eventId && eventData[eventId]) {
        const event = eventData[eventId];

        document.getElementById("event-title").textContent = event.title;
        document.getElementById("event-date").textContent = "Fecha: " + event.date;
        document.getElementById("event-location").textContent = "Ubicación: " + event.location;
        document.getElementById("event-price").textContent = "Precio: " + event.price;
        document.getElementById("event-description").textContent = event.description;
    } else {
        // Si no se encuentra el evento, mostrar un mensaje de error
        document.getElementById("event-title").textContent = "Evento no encontrado";
        document.getElementById("event-date").textContent = "";
        document.getElementById("event-location").textContent = "";
        document.getElementById("event-price").textContent = "";
        document.getElementById("event-description").textContent = "Lo sentimos, no pudimos encontrar los detalles del evento.";
    }
}

// Ejecutar la función cuando la página se cargue
window.onload = loadEventDetails;
