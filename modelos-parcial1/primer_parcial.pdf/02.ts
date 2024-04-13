//Pregunta 2: Merry Christmas (4 puntos)
interface Elemento {
    codigo: number;
    precio: number;

    obtenerPrecio(): number;
}

class ElementoConcreto implements Elemento {
    codigo: number;
    precio: number;
    
    constructor( codigo: number, precio: number ) {
        this.precio = precio;
        this.codigo = codigo;
    }
    
    obtenerPrecio(): number {
        return this.precio;
    }
}

class Kit implements Elemento {
    codigo: number;
    precio: number;
    elementos: Elemento[];

    constructor( codigo: number, precio: number, elementos: Elemento[] ) {
        this.codigo = codigo;
        this.precio = precio;
        this.elementos = elementos;
    }

    obtenerPrecio(): number {
        this.elementos.forEach( (elemento) => {
            this.precio+= elemento.obtenerPrecio();
        })

        return this.precio - (this.precio * 10) / 100;
    }
}

//main
let elemento1: Elemento = new ElementoConcreto(1, 10);
let elemento2: Elemento = new ElementoConcreto(2, 10);
let elemento3: Elemento = new ElementoConcreto(3, 10);
let elemento4: Elemento = new ElementoConcreto(4, 10);

let listaElementos2: Elemento[] = [elemento1, elemento2];
let kit2: Elemento = new Kit(22, 0, listaElementos2);


let listaElementos: Elemento[] = [elemento1, elemento2, elemento3, elemento4, kit2];

let kit1: Elemento = new Kit(11, 0, listaElementos);

console.log( kit1.obtenerPrecio() );