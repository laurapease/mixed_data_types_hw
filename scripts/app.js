//### 1. Data types

// - A light switch that can be either on or off.

// - A user's email address.

// - A spaceship with a hull, laser blasters, tractor beam, and warp drive.

// - A list of student names from our class.

// - A list of student names from our class, each with a location.

// - A list of student names from our class, each with a location and each with a list of favorite tv shows.

// ### 2. Take it Easy

// 1. Make an array that holds all of the colors of the rainbow.

let rainbow = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

// 2. Write code that will access "blue" from the rainbow array.

console.log(rainbow[4]);

// 3. Make an object that is called your name and holds the information about your favorite food, a hobby, the name of the town that you live in currently, and your favorite datatype.

let laura = {
  favoriteFood: "pizza",
  favoriteHobby: "walking my dog",
  currentTown: "Nashville, TN",
  favoriteDatatype: "array",
};

// 4. Write code that will access your hobby from the object that you just created.

console.log(laura.favoriteHobby);

//### 3. Crazy Object!

const crazyObject = {
  taco: [
    {
      meat: "steak",
      cheese: ["panela", "queso", "chihuahua"],
    },
    {
      meat: "chicken",
      salsa: [
        "pico",
        "hot",
        "hotter",
        "really hot",
        "really really hot",
        "omg my mouth is burning",
      ],
    },
  ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: [
      "Pretty pretty prettayyyyy good",
      "Is that a parkinson's thing?",
      "women love a self confident bald man",
      "I'm a walking talking enigma",
    ],
    characters: [
      {
        name: "Jeff",
        occupation: "manager",
      },
      {
        name: "funkhauser",
        occupation: "tv dude",
      },
      {
        name: "susie",
        occupation: "jeffs wife",
        favourtieHobby: "Swearing at Larry and Jeff",
      },
    ],
  },
};

// Use crazyObject to log the following.

// - "omg my mouth is burning"
//     - "Pretty pretty prettayyyyy good"
//     - "Swearing at Larry and Jeff"
//     - "Chicken Teriyaki Boyyyyyy"
//     - The object the contains the name funkhauser

//console.log(crazyObject.taco[(1)[5]]);

console.log(crazyObject.larry.quotes[0]);

//console.log(crazyObject.characters[(2)[1]]);

console.log(crazyObject.larry.nicknames[1]);

//console.log((crazyObject.characters.name = "funkhauuser"));

//### 4. Object - ception

//With the following object:

const inception = {
  reality: {
    dreamLayer1: {
      dreamLayer2: {
        dreamLayer3: {
          dreamLayer4: {
            dreamLayer5: {
              dreamLayer6: {
                limbo: "Joseph Gordon Levitt",
              },
            },
          },
        },
      },
    },
  },
};

//Change the value of`limbo` to`null`.

inception.reality.limbo = null;

console.log(inception.reality.limbo);
