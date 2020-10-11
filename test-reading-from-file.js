const Serializer = require('./classes/Serializer');

let data = Serializer.deserialize('./json-data/all-data.json');

// Log the first person
console.log(data.allPersons[0]);

// Let the person speak
console.log(data.allPersons[0].sayHi());