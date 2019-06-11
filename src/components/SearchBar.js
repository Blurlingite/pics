import React from "react";

//IMPORTANT: rather than make the SearchBar (child) component be in charge of making API requests, we will let the parent component (App) take care of that. All this child component should do is get the search term from the user and then pass it back up to the parent component (App) so that it can get a list of images
class SearchBar extends React.Component {
  state = { term: "" };

  // Special note: Normally the "this" keyword points to the component itself

  // onFormSubmit(event) {
  //   //stops the browser from automatically submitting the form & refreshing the page after hitting ENTER in an input
  //   event.preventDefault();
  // console.log(this.state.term);
  // }

  // ABOVE: you will see commented out code for onFormSubmit written normal function syntax. When you use normal function syntax, the value of "this" gets broken and will lead to the "Cannot read state of undefined" error

  //Below we changed it to an arrow function. Arrow functions automatically bind the value of "this" to all the code inside this component. That will fix the value of "this" and make "this" point to the component again. You can also just put this arrow function on the form tag as a property instead of here like we did with onChange(), just remember to pass in "event" or it won't work. It would look like this <form onSubmit={event => this.onFormSubmit(event)}

  onFormSubmit = event => {
    //stops the browser from automatically submitting the form & refreshing the page after hitting ENTER in an input
    event.preventDefault();
    // Now "this"  in "this.state.term" will point to the component "SearchBar" and will work properly b/c of this arrow function
    // When we want to reference props in a class component, we must use this.props not just "props" like you would in functional components (b/c there is nowhere we could pass in a "props" parameter in this class)
    this.props.onSubmission(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
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
