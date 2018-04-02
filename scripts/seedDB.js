const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect("mongodb://localhost/MediHelperDB");

const patientSeed = [
  {
    _id: 1,
    firstName: "James",
    lastName: "Harrison",
    address: "170 10th St, ",
    address2: "Apt 7",
    city: "Oakland",
    state: "California",
    zip: "94607",
    preferredLanguage: "French",
    medicalcond: "None",
    medication: "None",
    allergies: "None",
    notes: "None",
    primaryCareName: "Rachel Curry",
    primaryCareNumber: "510-514-3368",
    contactFirstName: "Merissa",
    contactLastName: "Harrison",
    contactRelationship: "Mother",
    contactNumb: "510-479-4449"
  },
  {
    _id: 2,
    firstName: "Sophie",
    lastName: "Wang",
    address: "170 10th St, ",
    address2: "Apt 7",
    city: "Oakland",
    state: "California",
    zip: "94607",
    preferredLanguage: "Chinese",
    medicalcond: "None",
    medication: "None",
    allergies: "None",
    notes: "None",
    primaryCareName: "Tracy Li",
    primaryCareNumber: "510-479-4449",
    contactFirstName: "Jason",
    contactLastName: "Chen",
    contactRelationship: "Hunband",
    contactNumb: "510-514-3368"
  },
  {
    _id: 3,
    firstName: "Eason",
    lastName: "Lu",
    address: "170 10th St, ",
    address2: "Apt 7",
    city: "Oakland",
    state: "California",
    zip: "94607",
    preferredLanguage: "Chinese",
    medicalcond: "None",
    medication: "None",
    allergies: "None",
    notes: "None",
    primaryCareName: "Sandy He",
    primaryCareNumber: "510-479-4449",
    contactFirstName: "Jack",
    contactLastName: "Lu",
    contactRelationship: "Father",
    contactNumb: "510-514-3368"
  },
];

const eventSeed = [
  {
    eventTittle: "Appointment",
    startDate: "March 30th",
    startTime: "10:00am",
    endDate: " ",
    endTime: " ",
    rePatient: " ",
    description: " "
  },
  {
    eventTittle: "Appointment",
    startDate: "April 2nd",
    startTime: "09:00am",
    endDate: " ",
    endTime: " ",
    rePatient: " ",
    description: " "
  },
  {
    eventTittle: "Appointment",
    startDate: "April 8th",
    startTime: " 09:30am",
    endDate: " ",
    endTime: " ",
    rePatient: " ",
    description: " "
  },
];

const caretakerSeed = [
  {
    _id: 1,
    userName: "victorli0825",
    password: "vkvk0618",
    phoneNumb: "510-479-4449",
    local: {
      username: "victorli0825", 
      password: "$2a$10$a1gpLVJp1vQ3GMM1oXI8AeveXCDe9RJpPmaln1jhN4RzLgO4jiaK"
    },
    patient: "_id: 123"
  },
  {
    _id: 2,
    userName: "victorli",
    password: "visa618",
    phoneNumb: "510-708-0825",
    local: {
      "victorli"
      "$2a$10$a1gpLJp1vQ3GMM1oXI8AeveXCDe9RJpPmaln1jhN4RzLgO5ji.aK"
    },
    patient: "_id: 123"
  },
  {
    _id: 3,
    userName: "victor825",
    password: "edgewater1129",
    phoneNumb: "510-708-0905",
    local: {
      "victor825"
      "$2a$10$a1gpLVJp1vQ3GMM1XI8AeveXCDe9RJpPmaln1jhN4RzLgO6ji.aK",
    },
    patient: "_id: 123"
  },
];

db.Patient
  .remove({})
  .then(() => db.Patient.collection.insertMany(patientSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.Event
  .remove({})
  .then(() => db.Event.collection.insertMany(eventSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.Caretaker
  .remove({})
  .then(() => db.Caretaker.collection.insertMany(caretakerSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });