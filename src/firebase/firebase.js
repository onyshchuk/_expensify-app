import firebase from 'firebase/app';
import 'firebase/database';

const config = {
   apiKey: process.env.FIREBASE_API_KEY,
   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
   databaseURL: process.env.FIREBASE_DATABASE_URL,
   projectId: process.env.FIREBASE_PROJECT_ID,
   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };


// database.ref('expenses').on('child_changed', snapshot => {
//    console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('value', snapshot => {
//    const expenses = [];
//    snapshot.forEach(childSnapshot => {
//       expenses.push({
//          id: childSnapshot.key,
//          ...childSnapshot.val()
//       });
//    });
//    console.log(expenses)
// });

// const expenses = [{
//    description: 'first expense',
//    note: '',
//    amount: 125,
//    createdAt: 0
// }, {
//    description: 'second expense',
//    note: '',
//    amount: 689036,
//    createdAt: 4000
// }, {
//    description: 'third expense',
//    note: '',
//    amount: 45678,
//    createdAt: -6000
// }];

// expenses.forEach(expense => database.ref('expenses').push(expense))

// database.ref().on('value', snapshot => {
//    const { name, job: { title, company } } = snapshot.val();
//    console.log(`${name.split(' ')[0]} is a ${title} at ${company}`);
// });

// setTimeout(() => {
//    database.ref().update({
//       name: 'Onuk',
//       'job/title': 'Senior engineer',
//       'job/company': 'Google'
//    });
// }, 3000);

// database.ref().once('value')
//    .then((snapshot) => {
//       const val = snapshot.val()
//       console.log(val);
//    }).catch(e => {
//       console.log('Error fetching data', e);
//    })

// database.ref().set({
//    name: 'Alex Onyshchuk',
//    age: 29,
//    stressLevel: 6,
//    job: {
//       title: 'Software developer',
//       company: 'Google'
//    },
//    location: {
//       city: 'kiev',
//       country: 'Ukraine'
//    }
// }).then(() => {
//    console.log('data is saved');
// }).catch(e => {
//    console.log('This failed ', e);
// });

// database.ref().update({
//    stressLevel: 9,
//    'job/company': 'Amazon',
//    'location/city': 'Lviv'
// }).then(() => {
//    console.log('success');
// }).catch(() => {
//    console.log('sheeeet');
// });