async function carrera(){
    console.log("El proceso ha iniciado");


    const promise1 =new Promise((resolve)=>{
        setTimeout(() => {
            console.log("salio el 1")
            resolve()
        }, 3000);

    })

    const promise2 =new Promise((resolve)=>{
        setTimeout(() => {

            console.log("salio el 2")
            resolve()
            
        }, 1000);
    })
     const promise3 =new Promise((resolve)=>{
        setTimeout(() => {

            console.log("salio el 3")
            resolve()
            
        }, 4000);
    })
    // await Promise.all([promise1,promise2,promise3]);
    // console.log("se termino la carrera")
    return Promise.all([promise1,promise2,promise3]);

}


  carrera().then(() => {
    console.log("se termino la carrera");
  });
