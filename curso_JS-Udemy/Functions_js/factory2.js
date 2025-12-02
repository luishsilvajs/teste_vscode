// Simple Factory
function createPerson(firstName, lastName, age){
    return{
        firstName,
        lastName,
        age
    }
}

console.log(createPerson('Luis', 'Henrique', 26))
console.log(createPerson('Monique', 'Leiko', 35))
console.log(createPerson('Gabriel', 'Minoro', 26))
console.log(createPerson('Enzo', 'Murgia', 20))