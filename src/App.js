import React from "react";
import SearchBar from "./components/SearchBar";

class App extends React.Component {
  onFormSubmit = term => {
    console.log(term);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onFormSubmit} />
      </div>
    );
  }
}

export default App;
