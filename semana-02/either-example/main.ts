import { Either } from "./either";

let id_list: number[] = [1,2,3,4,5,6];

let id: number | undefined = id_list.find( (element) => element === 50 ); //variar este valor para hacer las pruebas

if ( !id ) {
    let error: Either<string, undefined> = Either.createError<string>( 'Id not found.' );
    console.log(`Tiene error: `, error.hasError());
    console.log(`Error: `, error.returnError());
    console.log(`Succed: `, error.returnSucced());
}
else {
    let succed: Either<undefined, number> = Either.createSucced<number>( id );
    console.log(`Tiene error: `, succed.hasError());
    console.log(`Error: `, succed.returnError());
    console.log(`Succed: `, succed.returnSucced());
}