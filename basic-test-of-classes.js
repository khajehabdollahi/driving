const Serializer = require('./classes/Serializer');
const Person = require('./classes/Person');
const Car = require('./classes/Car');
const Language = require('./classes/Language');
const Address = require('./classes/Address');
const Contact = require('./classes/Contact');
const CarParking = require('./classes/CarParking');
const TraficSchools = require("./classes/TraficSchools");
const AccomodationBooking = require("./classes/AccomodationBooking");
const Lesson = require("./classes/Lesson");
const Accomodation = require("./classes/Accomodation");
const Teacher = require("./classes/Teacher");
const Student = require("./classes/Teacher");

// -----------------------------------------------------------
// ALL THIS IS JUST TESTING TO CREATE ONE PERSON!
// We will need forms in a frontend eventually etc
// (but not needed for the assignment!)
// -----------------------------------------------------------

// Test Create Student
let student1 = new Student({
  //teacher:teacher, // should be an instance of teacher
  theory:false,
  driving:true
});
let student2 = new Student({
  //teacher:"Petter",
  theory:true,
  driving:true
});

// Test Create Teacher

let teacher1 = new Teacher({
  students: [student1, student2], // add student1 and student2 as students to teacher1
    driving:true,
    theory:false
});


// add teacher1 as teacher for student1
student1.teacher = teacher1;
// add teacher1 as teacher for student2
student2.teacher = teacher1;






let teacher2 = new Teacher({
  students:[m,k,d],
    driving:true,
    theory:true
});

//Test Accomodation
let accomodation1 = new Accomodation({
  contactInfo: "contact",
  inHome:true,
  pricePerNight:200,
  provideBreakfast:true,
  availableDates:"date"
});

let accomodation2 = new Accomodation({
  contactInfo: "contact2",
  inHome:true,
  pricePerNight:300,
  provideBreakfast:false,
  availableDates:"date1"
});

// Test CarParking

let carParking1 = new CarParking({
  owner:"Thomas",
  contactInfo:"contact",
  pricePerMonth:"400",
  isOpen:true,
  isGarge:false,
  isStreet:false,
  doesParkingsOwnerUseTheCar:true
});
let carParking2 = new CarParking({
  owner:"Hassan",
  contactInfo:"contact1",
  pricePerMonth:"300",
  isOpen:false,
  isGarge:true,
  isStreet:false,
  doesParkingsOwnerUseTheCar:false,
});

//Test TraficSchools

let traficSchool1 = new TraficSchools({
  name:"ABCD",
  contactInfo:"Contact",
  pricePerLecture:500,
  manager:"Thomas"
});

let traficSchool2 = new TraficSchools({
  name:"1234",
  contactInfo:"Contact2",
  pricePerLecture:600,
  manager:"Hassan"
});

let accomodationBooking1 = new AccomodationBooking({
  startDate:'date1',
      endDate:'date2',
      accomodation:'Hostel',
      bookedBy:'Hassan',
});

//Test Lesson

let lesson1 = new Lesson({
  price:500,
    teacher:'Hassan',
    student:'Ola',
    payViaUs:true,
    carToUse:Car,
    startTime:'date1',
    endTime:'date2',
    theory:true,
    driving:false,
});

// Test creating some cars
let car1 = new Car({
  automatic: true,
  plateNumber: 'ABC123'
});

let car2 = new Car({
  automatic: false,
  plateNumber: 'DEF456'
});

// Languages the person speaks and how good
let language1 = new Language({
  languageName: 'Swedish',
  level: 5
});

let language2 = new Language({
  languageName: 'English',
  level: 4
});

// Adress the person lives on
let thomasAddress = new Address({
  streetName: 'Kyrkogatan',
  streetNumber: '21',
  zipCode: '22222',
  city: 'Lund',
  country: 'Sweden'
});

// Contact info for the person
let contactInfoThomas = new Contact({
  address: thomasAddress,
  email: 'thomas@nodehill.com',
  mobileNumber: '079-313644',
})

// Test creating a Person
let thomas = new Person({
  firstName: 'Thomas',
  lastName: 'Frank',
  contactInfo: contactInfoThomas,
  isManualDL: true,
  isAutomatDL: false,
  isMale: true,
  isFemale: false,
  cars: [car1, car2],
  isParkingOwner: true,
  languageSkills: [language1, language2]
});

console.log(thomas);

// -----------------------------------------------------------
// END OF TEST - CREATING ONE PERSON
// -----------------------------------------------------------


// -----------------------------------------------------------
// TEST HAVE ALL DATA IN ONE VARIABLE + SAVE IT TO DISK
// -----------------------------------------------------------

// We could store all data in an application in a data object
let data = {
  allPersons: [thomas]  // here we could add many more persons
  // here could have more properties... allAccomadations etc
};

// We can save the data to disk
Serializer.serialize('./json-data/all-data.json', data);


