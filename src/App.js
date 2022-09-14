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

export default App;
