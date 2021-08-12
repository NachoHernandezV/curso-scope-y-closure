const fruit = () =>{
    if(true){
        var fruta1 = 'apple';
        let fruta2 = 'banana';
        const fruta3 = 'kiwi';
    }

    console.log(fruta1);  //SI IMPRIME SI SE PUEDE ACCEDER
    console.log(fruta2); //No se puede acceder error
    console.log(fruta3);//No se puede acceder error
} 

fruit();


//EJEMPLO 2
let x=1;
{
    let x=2;
    console.log(x); //imprimie 2
}
console.log(x);  //imprime 1
//Ambas se imprimen por q se llaman igual pero existen en lugares diferentes


//EJEMPLO 3
var x=1;
{
    var x=2;
    console.log(x); //imprimie 2
}
console.log(x);  //imprime 2
//la variable x se reemplaza por el valor 2.


//EJEMPLO 4
const ciclofor = () =>{
    for(let i=0;i<10;i++){
        setTimeout(()=>{
            console.log(i);
        },100)
    }
};

ciclofor(); //El resultado es del 0 al 9


//EJEMPLO 5
const ciclofor = () =>{
    for(var i=0;i<10;i++){

        //setTimeout(()=>{
            console.log(i+" esto es var");
       //},100)
    }
};

ciclofor(); //El resultado es el 10 repetido 10 veces usando setTimeout()