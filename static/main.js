// Bloqueo de clic derecho y copia "fácil"
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});

document.addEventListener("copy", function (e) {
    e.preventDefault();
    alert("El contenido de este sitio está protegido. Si necesitas algo, contáctame 😊");
});

// Efecto pequeño en el label de terminal (parpadeo del cursor)
document.addEventListener("DOMContentLoaded", () => {
    const labels = document.querySelectorAll(".terminal-label");
    labels.forEach(label => {
        if (!label.textContent.endsWith("$")) return;
        const span = document.createElement("span");
        span.className = "terminal-cursor";
        span.textContent = "█";
        label.appendChild(document.createTextNode(" "));
        label.appendChild(span);
    });
});