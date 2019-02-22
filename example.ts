import { konmari } from "./"; // "import konmari from 'kondo'"

var person = {
  name: "Derek",
  car: "Honda"
};

konmari(person, "car", false); // => 😄
// person => { name: 'Derek' }
