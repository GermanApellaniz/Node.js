/*let nombre = "pepe";
let edad = 25;
let precio = "$99.90";
let series = ["Darck","Mr. Robot","Castlevania"];
let peliculas = {nombre:"Alien", anio:86, actores:["actor1", "actor2", "actor3"]};
console.log(nombre); 
console.log(edad);
console.log(precio);
console.log(series);
console.log(peliculas);
edad++;
console.log(edad);
series.push("Scrabs");
console.log(series);*/
// funcion simple
/*function nombre(nombres, apellido){
    return nombres + " " + apellido;
}
let nombreapellido = nombre("german","apellaniz");
console.log(nombreapellido);*/
let series = ["Darck","Mr. Robot","Castlevania"];
function mostarLista(List){
    if(List==null)
        return("La lista esta vacia");
    else
        return(List);    
}
console.log(mostarLista(series));
function crearMultiplicador(){
    let list =[1,2,3,4];    
    return(list);
};
console.log(crearMultiplicador());