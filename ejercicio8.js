const nombres =["alex","Cris","yuli","valentina","lupita"]

function delay(milisegundos) {
    return new Promise((resolve) => {
        setTimeout(resolve, milisegundos);
    });
}
async function procesarNombres(nombres) {
for (const nombre of nombres) {
await delay(5000);
console.log(`Procesado: ${nombre}`);
}
}

procesarNombres(nombres)



