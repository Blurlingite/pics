import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
  onSearchSubmit(term) {
    console.log(term);
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        {/* We pass it a custom named prop called onSubmission so we can pass the onSearchSubmit function to child components */}
        <SearchBar onSubmission={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
