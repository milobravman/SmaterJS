export default class User{
    constructor(name, age){
        this.name = name
        this.age = age
    }
}

export function printName(User){
    console.log(`User ${User.name}`)
}

export function printAge(User){
    console.log(`User age: ${User.age}`)
}

