alert('hola alexis')
let operacion = 5+3

switch(operacion){
    case 0:
        // alert('en resultado es 0')
        console.log('en resultado es 0')
    
    break;

    case 7 : 
        // alert('el resultado es 7')
        console.log('el resultado es 7')

    break;

    default :
    // alert('el resultado no es lo esperado')
    console.log('el resultado no es lo esperado')
}

function saludar (nombre){
    return `hola ${nombre} como estas`
}

console.log(saludar('alexis'))

//<-------------------------clases (poo)-----------------------

//--------como se usaba antes---------------

function Inventario(titulo){
    this.titulo=titulo;
    this.articulos=[];
}

Inventario.prototype.getNombre=function(){
    return this.titulo;
}

Inventario.prototype.add=function(articulo, cantidad){
    this.articulos[articulo]= cantidad
}

Inventario.prototype.cantidad=function(articulo){
    return this.articulos[articulo]
}

let libros= new Inventario('libros');
libros.getNombre();
libros.add('aprendiendo javascript', 5);
console.log(libros.cantidad('aprendiendo javascript'))

class InventarioNuevo{
    constructor(titulosNuevos){
        this.titulosNuevos= titulosNuevos;
        this.articulosNuevos=[];

    }
    getNombreNUevos(){
        return this.titulosNuevos;
    }

    addNuevos(articulo,cantidad){
        this.articulosNuevos[articulo]= cantidad
    }

    cantidadNuevo(articulo){
        return this.articulosNuevos[articulo]
    }
} 

let librosNuevos= new InventarioNuevo('librosNuevos');

librosNuevos.getNombreNUevos();
librosNuevos.addNuevos('aprendiendo REACT',10);
console.log(librosNuevos.cantidadNuevo('aprendiendo REACT'))

//{{{{{{{{{bucles}}}}}}}}}

let i=1;

while(i<11) {
    console.log(i);
    i++;
    
}

function bucleWhile(num){
    let i=0;
    while(i<num){
        console.log(i);
        i++;  
    }
}

bucleWhile(15);

//-----------ciclo for--------

function bucleFor(num){
    for (let i = 0; i < num; i++) {
        console.log(i)
    }
}

bucleFor(20);