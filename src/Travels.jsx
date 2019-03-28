import React from "react";
import Travel from "./Travel";
// src/Quotes.js
const travels = [
  {
    destination: "Tahiti",
    country: "French-Polynesia",
    photo: "http://moneyinc.com/wp-content/uploads/2016/06/Tahiti.jpg",
    distance: "Too Far"
  },
  {
    destination: "Sulawesi",
    country: "Indonesia",
    photo: "http://1.bp.blogspot.com/-KZvbA5kpWkY/VfLaRoPnFzI/AAAAAAAABR4/InLYcWY9yQw/s1600/suku%2Bbajo.jpg",
    distance: "Too Far"
  },
  {
    destination: "Toraja",
    country: "Indonesia",
    photo: "https://c1.staticflickr.com/3/2507/3976484617_e84c02e526_z.jpg?zz:1",
    distance: "Too Far"
  },
  {
    destination: "Kawah Ijen",
    country: "Indonesia",
    photo: "https://lechaudrondevulcain.com/wp-content/uploads/2015/06/Kawah-Ijen-Jawa-Timur-Bayuwangi.jpg",
    distance: "Too Far"
  },
  {
    destination: "Bromo",
    country: "Indonesia",
    photo: "http://4.bp.blogspot.com/-fNbud8teV-E/UDT_5PhAOeI/AAAAAAAABqc/97qknhApIHo/s1600/Mount+Bromo.jpg",
    distance: "Too Far"
  },
];

const Travels = () => (
  <div>
    {travels.map(quote => <Travel {...quote} />
    )}
  </div>
);

// const todoItems = quotes.map((todo, index) =>
//   // Only do this if items have no stable IDs
//   <li key={index}>
//     {todo.text}
//   </li>
// );



export default Travels;