// // Exercise 1

// const toyota1 = {
//   model: "Toyota",
//   type: "Camry",
//   logModel() {
//     console.log(this.model, this.type);
//   },
// };

// const toyota2 = {
//   model: "Toyota",
//   type: "Rav4",
// };

// toyota1.logModel.call(toyota2);

// // Exercise 2

// const flights = {
//   flights: [],

//   priorityFlights: [],

//   scheduleFlight(flight) {
//     this.flights.push(flight);
//   },

//   removeFlight(flight) {
//     this.flights = this.flights.filter(flightFilter.bind(this));
//     function flightFilter(f) {
//       if (flight === f) {
//         return this.priorityFlights.includes(flight);
//       }
//       return true;
//     }
//   },

//   makePriorityFlight(flight) {
//     this.priorityFlights.push(flight);
//   },
// };

// flights.scheduleFlight("1");
// flights.makePriorityFlight("1");
// flights.removeFlight("1");
// console.log(flights.flights);

// // Exercise 3

// function CarConstructor(model, year) {
//   if (new.target) {
//     this.mode = model;
//     this.year = year;
//   } else {
//     return new CarConstructor(model, year);
//   }
// }

// console.log(CarConstructor("Porshe", "2020"));

// Exercise 4

// const objArr = [{ name: "1" }, { name: "2" }, { name: "3" }, { name: "4" }];

// function logName() {
//   console.log(this.name);
// }

// let newArray = objArr.map((item) => {
//   item.logName = logName;
//   return item;
// });

// newArray[1].logName();

// // Exercise 5

// const arrayOfObjectNames = [{ name: "1" }, { name: "2" }, { name: "3" }];

// function logArrayObjectNames() {
//   console.log(this.name);
// }

// function logNames(arr) {
//   arr.forEach((val) => {
//     logArrayObjectNames.call(val);
//   });
// }

// logNames(arrayOfObjectNames);

// // Exercise 6

// const arrayOfObjectNames = [{ name: "1" }, { name: "2" }, { name: "3" }];

// function logArrayObjectNames() {
//   console.log(this.name);
// }

// const mappedFunc = arrayOfObjectNames.map((item) => {
//   return logArrayObjectNames.bind(item);
// });

// mappedFunc.forEach((item) => item());

// // // Exercise 8

// function Song(title, artist) {
//   this.title = title;
//   this.artist = artist;
// }

// Song.prototype.play = function () {
//   console.log(`playing ${this.title}`);
// };

// let song1 = new Song("hello", "iglesias");
// let song2 = new Song("barev", "iglesias");
// song1.play();
// song2.play();

// // Exercise 11

// const checkKnow = {
//   surname: "surname",
//   name: "checkKnow",
//   foo: {
//     name: "foo",
//     logName() {
//       console.log(this.surname);
//     },
//   },
//   boo() {
//     const obj = {
//       name: "boo method",
//       check: () => {
//         console.log(this.name);
//       },
//     };
//     obj.check();
//   },
// };

// checkKnow.foo.logName();
// checkKnow.boo();
