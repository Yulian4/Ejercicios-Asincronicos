async function saludar() {
    return "Hola, Mundo";
}

async function main() {
    const mensaje = await saludar();
    console.log(mensaje);
}
main();