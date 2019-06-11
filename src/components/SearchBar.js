import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            {/* If we put parantheses like this this.onInputChange(),
          then that method will be called everytime the component is rendered (including the very 1st time, which we DO NOT want so we leave it off) We only want this method called when the input is changed  */}

            {/* "onChange" is a special property that runs anytime the input is changed */}
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
