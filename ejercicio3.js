
const resta = (a, b) => {
  return new Promise((resolve, reject) => {
    resolve(a - b);
  });
};


resta(27, 19)
  .then((resultado) => {
    console.log(`El resultado es:${resultado}`); 
    return resta(resultado, 8);
    })
  .then((resultado2) => {
    console.log(`El nuevo resultado es: ${resultado2}`);
    return resta(resultado2,5);
  })
  .catch((error) => {
    console.error(error);
  });
