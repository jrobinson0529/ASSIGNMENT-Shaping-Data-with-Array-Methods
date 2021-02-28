
/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]
const printPlanets = () => { planets.forEach(planet => document.querySelector('#planets').innerHTML += `${planet}<hr>`); };
printPlanets();
/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
const firstLetterUpper = planets.map(planet => planet = planet[0].toUpperCase() + (planet.slice(1, planet.length)));
console.log(firstLetterUpper);

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/
const filteredArray = planets.filter((planet) => planet.includes('e'));
console.log(filteredArray);
