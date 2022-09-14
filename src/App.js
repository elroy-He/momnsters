//import { Component } from "react";

import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBar from "./components/search-bar/search-box.component";
import logo from "./logo.svg";
import "./App.css";

// when props or state changes, react will rerender the whole function
const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  console.log("render");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setMonsters(data));
  }, []);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  useEffect(() => {
    const filtered = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(filtered);
  }, [monsters, searchField]);

  return (
    <div className="App">
      <h1 className="app-title"> Monster Rolodex</h1>
      <SearchBar
        className="monster-search-bar"
        onChangeHandler={onSearchChange}
        placeholder="Search Monster"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// class App extends Component {
//   // constructor runs first no matter what class it's in
//   // render runs second
//   //    --- The initial UI and state will run (which will be empty cuz monster:[])
//   // componentDidMount runs last
//   // Eveytime state changes the app will rerender
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   // if you need to make an API call to get the proper
//   // data to render, you use componentDidMount

//   async componentDidMount() {
//     try {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/users"
//       );
//       const data = await response.json();
//       console.log(data);
//       this.setState(() => {
//         return { monsters: data };
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   // componentDidMount() {
//   //   fetch("https://jsonplaceholder.typicode.com/users")
//   //     .then((response) => response.json())
//   //     .then((users) =>
//   //       this.setState(
//   //         () => {
//   //           return { monsters: users };
//   //         },
//   //         () => {
//   //           console.log(this.state);
//   //         }
//   //       )
//   //     );
//   // }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };
//   render() {
//     const { onSearchChange } = this;
//     const { monsters, searchField } = this.state;
//     const filteredMonsters = monsters.filter((el) => {
//       return el.name.toLowerCase().includes(searchField);
//     });
//     return (
//       <div className="App">
//         {/* <input
//           className="SearchBox"
//           type="search"
//           placeholder="Search Monster"
//           onChange={onSearchChange}
//         /> */}
//         {/* {filteredMonsters.map((monster) => {
//           // Everytime you use map, you want to make sure
//           // The highest level element gets a key value
//           // So that react will know what to rerender
//           return (
//             <div key={monster.id}>
//               <h1>{monster.name}</h1>
//             </div>
//           );
//         })} */}
//         <SearchBar
//           onChangeHandler={onSearchChange}
//           placeholder="Search Monster"
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }
export default App;
