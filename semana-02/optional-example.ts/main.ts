import { Optional } from "./optional";
import { User } from "./user";

//main
let user1: User = new User( 1, 'Jose' );

let optional: Optional<User> = new Optional<User>( user1 ); 

console.log(optional.hasValue());
console.log(optional.getValue());

