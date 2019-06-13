// Template to show a single image
import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };
    // we create this ref by using the React class we extend from whcih has a method called createRef()
    // We want to use this ref to access the DOM (the regular HTML DOM not React DOM) so we can access the image height that was rendered to the page, so we can change it so every image gets an appropriate amount of space in the grid
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    // console.log(this.imageRef.current.clientHeight);
    // anytime an image loads up and displays on the screen, it emits the 'load' event so you can access the height now. Before it tried to access the height before the image rendered itself
    // we use this.setSpans b/c the grid uses spans for spacing
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    // to find out how many spans this image should take up, divide the height by the row height (from grid-auto-rows in ImageCard.css)
    // Math.ceil() will cap the value
    const spans = Math.ceil(height / 10);

    // if the field and the value are the same you can just put the value. So "spans" here is actually spans: spans
    this.setState({ spans });
  };
  render() {
    const { description, urls } = this.props.image;

    return (
      // style={{ gridRowEnd: `span ${this.state.spans}` }} will dynamically allocate span space depending on what got added to the state
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        {/* The ref is how we get access to the HTML DOM element that was rendered to the page, b/c right here it is just JSX */}
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
