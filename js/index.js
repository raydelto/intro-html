function saludar() {
    const nombre = document.getElementById("txtNombre").value;
    const mensaje = document.getElementById("mensajeSaludo");
    if (nombre != "") {
        mensaje.textContent = `¡Hola, ${nombre}!`;
    } else {
        mensaje.textContent = "Por favor, ingrese su nombre.";
    }
}
