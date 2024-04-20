class NewStringsFuncionalitiesFramework {

    upperCase(text: string): string {
        return text.toUpperCase();
    }

    concatAndUpperCase(string1: string, string2: string) {
        let newString: string = string1 + string2;
        return this.upperCase( newString );
    }
}

class Facade {
    private frameworkObject: NewStringsFuncionalitiesFramework;

    constructor( frameworkObject: NewStringsFuncionalitiesFramework ) {
        this.frameworkObject = frameworkObject;
    }

    facadeUpper( str: string ): string {
        return this.frameworkObject.upper( str );
    }

    facadeConcatAndUpper( str1: string, str2: string ): string {
        return this.frameworkObject.concatAndUpper( str1, str2 );
    }
}

//Aqui estas acoplado al framework si hay un cambio de nombre en un metodo, todo mal
let framework: NewStringsFuncionalitiesFramework = new NewStringsFuncionalitiesFramework();

linea 15
console.log(framework.upper('joise'));
console.log(framework.concatAndUpper('hola', 'chao'));

//linea 200
console.log(framework.upper('joise'));
console.log(framework.concatAndUpper('hola', 'chao'));

//linea 157
console.log(framework.upper('joise'));
console.log(framework.concatAndUpper('hola', 'chao'));

//Desacoplado totalmente al framework, si hay cambio de metodo reviso en mi clase facade
let frameworkFacade: Facade = new Facade( framework );

//linea 15
console.log(frameworkFacade.facadeUpper('jose'));
console.log(frameworkFacade.facadeConcatAndUpper('hola', 'chao'));

//linea 200
console.log(frameworkFacade.facadeUpper('jose'));
console.log(frameworkFacade.facadeConcatAndUpper('hola', 'chao'));

//linea 157
console.log(frameworkFacade.facadeUpper('jose'));
console.log(frameworkFacade.facadeConcatAndUpper('hola', 'chao'));