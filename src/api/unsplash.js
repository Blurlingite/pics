// handles allowing Unsplash to accept out request
import axios from "axios";

// create() will create an instance of the axios client with a couple of default properties
// This will be useful b/c most requests we make to the Unsplash API require the smae data. So we are putting all the common info here so we don't have to keep specifying everywhere else
export default axios.create({
  // A way to identify yourself (or configure the request) as the one accessing the info. One of the ways you can do this is by passing in a "headers" object
  // In Unsplash's documentation on their site you need an "Authorization" field and you need to assign it the string of 'Client-ID <theAccessKeyTheyGaveYouWhenYouMadeAProjectOnUnsplash>
  // baseURL is the URL that all the requests would start with (before adding stuff like /search/photos)
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 198e6b8fec54f17e72ce11df3415d31c05d8c0c577fc4beb6e4f712f463e8d2f "
  }
});
