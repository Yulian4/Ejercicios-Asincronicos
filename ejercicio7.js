async function procesos(){
    console.log("El proceso ha iniciado");


    const promise1 =new Promise((resolve)=>{
       await = setTimeout(() => {
            console.log("El proceso ha terminado.");
            resolve()
        }, 3000);

    })


}


  procesos();