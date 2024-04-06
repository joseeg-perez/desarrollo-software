//Ejercicio explicado en clase.
//Retornar cuantos elementos de tipo 'elemento' tiene un componente.

abstract class Componente {
    abstract calcular(): number;
}

class Elemento extends Componente {
    calcular(): number {
       return 1; 
    }
}

class Compuesto extends Componente {
    componentes: Componente[];

    constructor( componentes: Componente[] ){
        super();
        this.componentes = componentes;
    }

    calcular(): number {
        let cantidad: number = 0;
        this.componentes.forEach(componente => {
            cantidad += componente.calcular();
        });

        return cantidad;
    }
}

//main 
let martillo: Componente = new Elemento();
let boton: Componente = new Elemento();
let componentesCajita: Componente[] = [martillo, boton];

let cajita: Componente = new Compuesto(componentesCajita);

let cartulina: Componente = new Elemento();
let balon: Componente = new Elemento();
let componentesCaja: Componente[] = [cartulina, balon, cajita];

let caja1: Componente = new Compuesto(componentesCaja);

console.log(caja1.calcular())
 

