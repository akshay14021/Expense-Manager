const person = {
    age: 26,
    location: {
        city: 'Aldie',
        temp: 76
    }
}

const { name: firstName = 'anonymous', age } = person
console.log(`${firstName} is ${age}`)