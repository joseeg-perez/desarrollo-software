export class Either<T, E> {
    private error: T | undefined;
    private succed: E | undefined;
    private assigned: boolean;

    private constructor( error: T | undefined, succed: E | undefined ) {

        if ( error ){
            this.error = error;
            this.assigned = true;
        }
        else {
            this.succed = succed;
            this.assigned = false;
        }
    }

    static createError<T>( error: T ): Either<T, undefined> {
        return new Either( error, undefined);
    }

    static createSucced<E>( succed: E ): Either< undefined, E> {
        return new Either( undefined, succed  );
    }

    returnError(): T | undefined {
        return this.error;
    }

    returnSucced(): E | undefined {
        return this.succed;
    }

    hasError(): boolean {
        return this.assigned;
    }
}
