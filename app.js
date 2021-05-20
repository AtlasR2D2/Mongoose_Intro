
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: [true,"Must specify fruit name."]
  },
  rating: {
    type: Number,
    min: [0,"Score is between 0 and 10"],
    max: [10,"Score is between 0 and 10"]
  },
  review: String
});

const Fruit = mongoose.model("Fruit",fruitSchema);

// const fruit = new Fruit ({
//   name: "Apple",
//   rating: 4,
//   review: "Pretty solid as a fruit."
// });
// //
// fruit.save();

const personSchema = new mongoose.Schema ({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person",personSchema);

const person = new Person({
  name: "John",
  age:37
});
//
// person.save();

const pineapple = new Fruit ({
  name: "Pineapple",
  rating: 9,
  review: "So tasty."
});

// pineapple.save();

const amy = new Person({
  name: "Amy",
  age:12,
  favouriteFruit: pineapple
});

// amy.save();

const mango = new Fruit ({
  name: "Mango",
  rating: 10,
  review: "OH MY DAYS....HEAVEN."
});

// mango.save();

Person.updateOne({name:"John"},{favouriteFruit: mango},function(err){
  if (err) {
    console.log(err);
  }
  else {
    console.log("UPDATE was successful.");
  }
});

const kiwi = new Fruit ({
  name: "Kiwi",
  rating: 10,
  review: "Amazeballs."
});

const orange = new Fruit ({
  name: "Orange",
  rating: 10,
  review: "Zesty magic!"
});

const uglyFruit = new Fruit ({
  name: "Ugly Fruit",
  rating: 1,
  review: "Good nutrition...horrible taste."
});

// Fruit.insertMany([kiwi,orange,uglyFruit],function(err){
//   if (err) {
//     console.log(err);
//   }
//   else {
//     console.log("Insert Successful.");
//   }
// })


Fruit.find(function(err,fruits){
  if (err) {
    console.log(err);
  }
  else {
    mongoose.connection.close();
    fruits.forEach(fruit=>console.log(fruit["name"]));
  }
});

// Fruit.updateOne({_id:"XXXXXXXXX"},{name: "Peach"},function(err){
//   if (err) {
//     console.log(err);
//   }
//   else {
//     console.log("UPDATE was successful.");
//   }
// });

// order of key,value pairs in javascript object doesn't matter.
//
// Fruit.deleteOne({_id:"60a6a736630e1e2b28179302"},function(err){
//   if (err) {
//     console.log(err);
//   }
//   else {
//     console.log("DELETE was successful");
//   }
// });

// Person.deleteMany({name:"John"},function(err){
//   if (err) {
//     console.log(err);
//   }
//   else {
//     console.log("DELETE was successful");
//   }
// });
