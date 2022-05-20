class usuario{
     constructor(nombre,apellido,libros,mascotas){
         this.nombre=nombre;
         this.apellido=apellido;
         this.libros=libros;
         this.mascotas=mascotas;
     }
     getFullName = function (nombre, apellido){
         return `Su nombre es ${this.nombre} ${this.apellido}`;
     }
     addMascota = function (varMascota) {
        return this.mascotas.push(varMascota);
    }
    countMascotas = function() {
         return this.mascotas.length;
    }
    addLibro = function (varLibro, varAutor) {
        return this.libros.push({ varLibro: varLibro, varAutor: varAutor });
    }
    getBookNames = function () {
        return this.libros.map(function (varLibro){
                                     return varLibro.varLibro;
                                 });
    }
}
const Prueba1 = new usuario ("German","Apellaniz",[],[]);
console.log(Prueba1.getFullName());
Prueba1.addMascota("Perro");
console.log(Prueba1);
console.log("Tiene "+Prueba1.countMascotas()+" Mascotas");
Prueba1.addLibro("It","Stephen King",);
Prueba1.addLibro("At","Stephen King",);
Prueba1.addLibro("Ot","Stephen King",);
Prueba1.addLibro("Ut","Stephen King",);
Prueba1.addLibro("Et","Stephen King",);
console.log(Prueba1);
console.log(Prueba1.getBookNames());