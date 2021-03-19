import {letterPointValues} from '../scrabble-variables.js'

let points = letterPointValues;

let rack1 = ['a','b','q','l','z'];
let rack2 = ['c','b','l','l','a'];

const rackValue = (rack) => {
  let totalValue= 0; 
  rack.map((letter) =>{ totalValue = points[letter] + totalValue; });
  return totalValue;
}

console.log("Rack 1 Total Rack Value expected 25: " + rackValue(rack1))