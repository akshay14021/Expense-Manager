import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCq8jEZnI-v-w21_rPZLyJdFp129zzKjA0",
    authDomain: "expense-manager-d1d25.firebaseapp.com",
    databaseURL: "https://expense-manager-d1d25.firebaseio.com",
    projectId: "expense-manager-d1d25",
    storageBucket: "expense-manager-d1d25.appspot.com",
    messagingSenderId: "319059263762",
    appId: "1:319059263762:web:0c71188bb197218d"
};

firebase.initializeApp(firebaseConfig)

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { googleAuthProvider, firebase as default };

// firebase.database().ref('expenses').push({
//     description: 'Milk',
//     note: 'Milk amount in BJ',
//     amount: '2300',
//     createdAt: 1000
// })

// firebase.database().ref('expenses').once('value').then((snapshot) => {
//     const expenses = []
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses)
// })

// firebase.database().ref('expenses').on('value', (snapshot) => {
//     const expenses = []
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses)
// })



// firebase.database().ref('notes').push({
//     title: 'Course Topics',
//     body: 'React Native, Angular, Pyhton'
// })

// const notes = [
//     {
//         id: '12',
//         title: 'First Note',
//         body: 'This is my note',
//     },
//     {
//         id: '13',
//         title: 'Second Note',
//         body: 'This is my second note',
//     }
// ]

// firebase.database().ref('notes').set(notes)

// firebase.database().ref('notes/').once('value', (snapshot) => {
//     console.log(snapshot.val())
// })

// firebase.database().ref('notes/-LhWzDws9_-Hv--NfSzj').remove()

// firebase.database().ref().on('value', (snapshot) => {
//     const object = snapshot.val()
//     const { name, job } = object
//     console.log(`${name} is ${job.title} at ${job.company}`)
// })

// setTimeout(() => {
//     firebase.database().ref().update({
//         stressLevel: 12,
//         'job/company': 'Amazon',
//         'location/city': 'Seattle'
//     }).then((data) => {
//         console.log('Data Updates')
//     }).catch((error) => {
//         console.log(error)
//     })
// }, 3000);

// firebase.database().ref().once('value').then((snapshot) => {
//     console.log(snapshot.val())
// }).catch((error) => {
//     console.log(error)
// })

// firebase.database().ref().set({
//     name: 'Akshay Joshi',
//     age: 26,
//     stressLevel: 6,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Aldie',
//         country: 'United States'
//     }
// }).then((data) => {
//     console.log('Data is saved!')
// }).catch((error) => {
//     console.log(error)
// })


// firebase.database().ref().update({
//     stressLevel: 12,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// }).then((data) => {
//     console.log('Data Updates')
// }).catch((error) => {
//     console.log(error)
// })
