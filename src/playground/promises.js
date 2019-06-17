const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is my resolved data')
    }, 2000);
})

console.log('before')

promise.then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(error)
})

console.log('after')