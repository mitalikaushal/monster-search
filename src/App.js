import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchFieldValue: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users =>
        this.setState({
          monsters: users
        })
      );
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { monsters, searchFieldValue } = this.state;

    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchFieldValue.toLowerCase())
    );

    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>{" "}
        <SearchBox
          onSearchChange={this.onSearchChange} 
        >
          {" "}
        </SearchBox>{" "}
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
