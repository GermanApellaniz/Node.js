class Persona{
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    colorGorro() {
        console.log("Usa gorro color Rojo....... " + this.nombre)
    }
    aumentarEdad(){
        this.edad++;
    }
}
const Persona1 = new Persona ("German","Apellaniz",31);
console.log(Persona1);
Persona1.colorGorro();
Persona1.aumentarEdad();
console.log(Persona1);