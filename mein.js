//alert('hola alexis')
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

//-------------array-----------
const obj ={
    unArray: new Array(10000)
}
  
function badPerformance(){
    console.time('ini');
    for (let i = 0; i < obj.unArray.length; i++) {
       
        obj.unArray[i]='hola'
    }
    console.timeEnd('ini')
}

function goodPerformance(){
    console.time('init');
    let unArray= obj.unArray;
    for (let i = 0, longitud=unArray.length; i < longitud; i++) {
       
        unArray[i]='hola'
    }
    console.timeEnd('init')
}

function GoodPerformance(){
    console.time('initi');
    let unArray= obj.unArray;
    let longitud=unArray.length
    for (let i = 0; i < longitud; i++) {
       
        unArray[i]='hola'
    }
    console.timeEnd('initi')
}

badPerformance(); // la forma que mas consume tiempo
goodPerformance();// las forma mas rapida
GoodPerformance();// esta es rapida

// muy importante , como convertit un objeto en un array para pder utilizar foreach


const repuestos= {
    nombre: 'stop led rh',
    marca: 'kia',
    precio: '850.000',
    ubicacion: 'A1',
    descripcion: 'stop rio spice led',
    fecha_compra:'01/02/22'

}

const convertirObetoArray =
Object.getOwnPropertyNames(repuestos);
convertirObetoArray.forEach(elem=>{
    let valor= Object.getOwnPropertyDescriptor(repuestos, elem).value;

    console.log(`la descripcion ${elem} es ${valor}`)
})

// -----------for in_______________

for (let prop in repuestos) {
    console.log(`la propieda ${prop} contiene ${repuestos[prop]}`)
    
}

const accesorios= {
    nombre: 'stop led',
    marca: 'kia',
    precio: '1.850.000',
    ubicacion: 'A2',
    descripcion: 'stop sportage ql led',
    fecha_compra:'02/03/22'

}

let Marcas = 'marca';
console.log(accesorios[Marcas])

//----------operacion------------
let numeroAleatorio = (Math.random()*100).toFixed(0)
//esto da un numero aleatorio de o a 100, debe de ser de esta forma 
console.log(numeroAleatorio)

let a= 3.5555555.toFixed(2)
console.log(a)
let b= [3,6,10,30,22]
b.sort()
console.log(b)

let bb= [1,4,3,6,9,2,8]
bb.sort()
console.log(bb)

const post =[
    {
        id:1,
        title:'mi primer post',
        tags:['javascript,webdeveloper'],
        precio:'15.000',
        
    },
    {
        
        id:2,
        title:'mi segundo post',
        tags:['javascript,webdeveloper','react'],
        precio:'17.000',
            
        
    },
    {
        
        id:3,
        title:'mi tercer post',
        tags:['javascript,webdeveloper','angular'],
        precio:'18.000',
            
        
    }
]

let buscador= post.find(elem=>elem.id==2)
console.log(buscador)
//estelo utilizamos para buscar dentro de un array , y el resultado es que nos devuleve todo el objeto que tenga
//el id que aya metido, o por lo que ayamos buscado, en este caso nos devuelve todo el post 2

 let sacarreducer= post.reduce((todosObjetos,index)=>{
     return [...todosObjetos, ...index.tags]
 },[])

 console.log(sacarreducer)

//  si queremos que no se repitan , los que repiten utilizamos set

let sacarreducer1= post.reduce((todosObjetos,index)=>{
    return Array.from(new Set([...todosObjetos, ...index.tags]))
},[]) 

console.log(sacarreducer1)


//--------------------- 

const aumentar= document.querySelector('.btn-agregar')
const disminuir= document.querySelector('.btn-disminuir')
let contador= document.getElementById('span')
let contadorNumerico= 0

aumentar.addEventListener('click', ()=>{console.log('estoy dando click')
    contadorNumerico++
    contador.textContent= contadorNumerico
})

disminuir.addEventListener('click',()=>{
    contadorNumerico--
    contador.textContent=contadorNumerico
})
//------------dos formas diferentes de hacer las cosas, una mas limpia que la otra
//pera las dos son perfectamente fucnionales
const container = document.querySelector('.container')
let span= document.getElementById('Span')
let contadorr=0

container.addEventListener('click', (e)=>{
    if(e.target.classList.contains('btn-Agregar')){
        contadorr++
        span.textContent=contadorr
    }

    if(e.target.classList.contains('btn-Disminuir')){
        contadorr--
        span.textContent=contadorr
    }

})

const ini = 'hola que tal'

const globalCloud=()=>{
    const seg= ', como estas'

    const local=()=>{
        const ter= ', un gusto saludarte'
        return ini+seg+ter

    }
    return local
}

const imprimirResultado= globalCloud()
console.log(imprimirResultado()+'  soy la forma ideal')

//esta es la mejor forma de llamar una funcion anidada, una funcion dentro de otra funcion