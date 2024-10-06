const findTheOldest = function(array) {
    return array.reduce((acc, curr) => {
        const d = new Date();
        const currAge = curr.yearOfDeath ? 
            curr.yearOfDeath - curr.yearOfBirth : 
            d.getFullYear() - curr.yearOfBirth;
        const accAge = acc.yearOfDeath ? 
            acc.yearOfDeath - acc.yearOfBirth : 
            d.getFullYear() - acc.yearOfBirth;
        return currAge > accAge ? curr : acc;
    });
};

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

  console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
