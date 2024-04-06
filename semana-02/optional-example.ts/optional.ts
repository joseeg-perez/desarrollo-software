export class Optional<T> {
    private readonly value: T | undefined;
    private assigned: boolean;

    constructor( value: T | undefined ) {
        if ( value ) {
            this.value = value;
            this.assigned = true;
        }
        else 
            this.assigned = false;
    }
    hasValue(): boolean {
        return this.assigned;
    }

    getValue(): T {
        if ( !this.hasValue() ) {
            throw new Error('Value not found.');
        }

        return <T> this.value;
    }
} 