// const book = {
//    title: 'Ego is the Enemy',
//    author: ' Ryan Holiday',
//    publisher: {
//       name: 'Penguin'
//    }
// }

// const { name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName)






// const person = {
//    name: 'Alex',
//    age: 29,
//    location: {
//       city: 'kiev',
//       temp: 1
//    }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}`);

// const { city, temp: temperature } = person.location;

// if(city && temperature) {
//    console.log(`It's ${temperature} in ${city}`);

// }






// const address = ['1299 S juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
// const [street, city, state, zip] = address
// console.log(`You are in ${city} ${state}`)



const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [coffee, , medium] = item;
console.log(`A medium ${coffee} costs ${medium}`)