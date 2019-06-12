import React from "react";
// import axios from "axios";
// We put all the common axios stuff in the unsplash.js file in the "api" folder, so instead of importing the whole axios library like we did above, we'll just import that file. Now we will use unsplash.get() for example instead of axios.get()
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  // when we expect multiple results from an API call (like a list of images) we should initialize it on our state with an empty array (or object if you are expecting multiple objects back, but the Unsplash API gives back an array)
  // I decided to name the field "images"
  state = { images: [] };
  // By putting async in front of the function name, we can use the async await syntax inside that function. This will allow us to get a little notification when the data is successfully retrieved from the API
  // async await syntax is great b/c it lets you assign thw "await" code to a variable ("response" below). You use async await syntax when you have code that will take a little bit of time to complete (like making network requests to APIs)
  // We turned onSearchSubmit into an arrow function b/c the "this" keyword lost it's reference inside this function. Now we fixed it
  onSearchSubmit = async term => {
    // Unsplash is a nifty API that we can use to get a list of photos (in JSON format).
    // The URL has the root URL of https://api.unsplash.com/
    // and the endpoint to access the photos search/photos

    // We also include a "params" field. Unsplash tells us that we need to pass in the search term to a field called "query". We will put that in the params field so axios will use that search term to get the pics from Unsplash
    const response = await unsplash.get("/search/photos", {
      params: { query: term } // Ex. ?query=cars (will be added to URL above)
    });

    // The image data we are looking from comes from "results" on the "data" field which comes from the "response" field. You can see how to access other fields by console logging and using the Console on Google Chrome
    // we update the state with setState(). We assign the "images" field on our state the image results with response.data.results
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        {/* We pass it a custom named prop called onSubmission so we can pass the onSearchSubmit function to child components */}
        <SearchBar onSubmission={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
