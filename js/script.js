// 1. Base de datos de contenido (Simulación de datos para el proyecto)
const infoProyecto = {
    'que-es': {
        titulo: "¿Qué es Guaraní-JoparaAI?",
        texto: "Un traductor multilingüe (guaraní, español, inglés y alemán) que incorpora inteligencia artificial para facilitar la comunicación. La inclusión del jopara permite que las traducciones sean más naturales y acordes al uso cotidiano en Paraguay. El sistema utiliza aprendizaje automático para adaptarse al contexto y reconocer expresiones locales, contribuyendo a la preservación del idioma guaraní."
    },
    'problema': {
        titulo: "Planteamiento del Problema",
        texto: "En Paraguay, la mezcla de idiomas como el guaraní y español genera dificultades cuando se incluyen expresiones en jopara, las cuales no son comprendidas por sistemas tradicionales. Esto limita el acceso a la información y afecta la comunicación precisa en ámbitos educativos, laborales y sociales."
    },
    'meta': {
        titulo: "Nuestra Meta y Solución",
        texto: "Buscamos una solución digital basada en IA que permita realizar traducciones precisas y adaptadas al uso real del idioma. Queremos fortalecer el uso de lenguas locales en entornos digitales, promoviendo la inclusión lingüística y facilitando la interacción entre personas de diferentes culturas."
    }
};

// 2. Función para mostrar los detalles en un Modal o Alerta profesional
function abrirDetalles(tema) {
    const data = infoProyecto[tema];
    const modal = document.getElementById('infoModal');
    
    document.getElementById('modalTitle').innerText = data.titulo;
    document.getElementById('modalText').innerText = data.texto;
    
    modal.style.display = 'flex';
}

function cerrarModal() {
    document.getElementById('infoModal').style.display = 'none';
}

// Cerrar modal al hacer clic fuera de la caja
window.onclick = function(event) {
    const modal = document.getElementById('infoModal');
    if (event.target == modal) {
        cerrarModal();
    }
};

// 3. Validación y Control del Formulario de Contacto
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Evita que la página se recargue

            // Obtenemos los valores
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const mensaje = document.getElementById('mensaje').value;

            // Validación simple
            if (nombre.trim() === "" || email.trim() === "" || mensaje.trim() === "") {
                alert("Por favor, completa todos los campos del formulario.");
                return;
            }

            const btn = form.querySelector('button');
            btn.innerText = "Enviando...";
            btn.disabled = true;

            // Envío real a través de FormSubmit
            fetch("https://formsubmit.co/ajax/liztalavera2001@gmail.com", {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    Nombre: nombre,
                    Email: email,
                    Mensaje: mensaje,
                    _cc: "alcarazcandiaevelin671@gmail.com",
                    _subject: "Nuevo mensaje de Guaraní-JoparaAI"
                })
            })
            .then(response => response.ok ? response.json() : Promise.reject())
            .then(() => {
                alert(`¡Gracias ${nombre}! Tu mensaje ha sido enviado correctamente a Evelin Alcaraz y Liz Talavera.`);
                form.reset();
            })
            .catch(() => {
                alert("Lo sentimos, hubo un error al enviar el mensaje. Inténtalo de nuevo más tarde.");
            })
            .finally(() => {
                btn.innerText = "Enviar al equipo";
                btn.disabled = false;
            });
        });
    }

    // 4. Efecto de scroll suave para el menú
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
