
import React from "react";


//1st way
const Travels = props => (
  <div style={{ border: "solid black 1px", backgroundColor: "aqua" }}>
    <h1> {props.destination} </h1>
    <h2> {props.country} </h2>
    <img src={props.photo} alt="alt" style={{ maxWidth: "50vw" }} />
    <p> Distance: {props.distance} </p>
    <br />

  </div>
);

//2nd way


// const Travels = ({ quote, character, image }) => (
//   <figure>
//     <img src={image} alt={character} />
//     <figcaption>
//       <blockquote>{quote}</blockquote>
//       <cite>{character}</cite>
//     </figcaption>
//   </figure>
// );


export default Travels;


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           {/* <img src={logo} className="App-logo" alt="logo" /> */}
//           <img src={logo2} className="App-logo2" alt="logo" />

//           <Hello />
//           <Compteur />
//           <Avatar
//             // image = "https://www.syfy.com/sites/syfy/files/cast_futurama_phillipjfry.jpg"
//             firstName="Fry"
//             lastName=""
//           />

//           <Avatar
//             image="http://orig09.deviantart.net/fb31/f/2012/119/b/7/zoidberg_trace_by_deepfry3-d4y0wlc.png"
//             firstName="Pr"
//             lastName="Zoidberg"
//             star
//           />

//           <Avatar
//             image="http://orig02.deviantart.net/3b7c/f/2014/128/d/5/leela_vector_by_aryadei-d7hm26n.png"
//             firstName="Leela"
//             lastName="Turanga"
//             star="true"
//           />

//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Eat React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }





