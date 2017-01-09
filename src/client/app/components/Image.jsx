import React, { Component } from "react";

class Image extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="col-md-3 photostream-column">
        <img className="photostream-photo" src={this.props.data.images.standard_resolution.url} />
      </div>
    ); 
  }
}

export default Image;