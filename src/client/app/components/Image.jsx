import React, { Component } from "react";

class Image extends Component {
  constructor(props) {
    super(props);
  }
  openModal(imageData) {
    //need to set modal and informaiton in redux 
    console.log(imageData);
  }
  render() {
    return(
      <div className="col-md-3 photostream-column">
        <img 
          className="photostream-photo" 
          src={this.props.data.images.standard_resolution.url}
          onClick={() => this.openModal(this.props.data)} 
        />
      </div>
    ); 
  }
}

export default Image;
