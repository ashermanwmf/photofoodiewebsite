import React, { Component } from "react";
import { Col }              from "react-materialize";

class Image extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <Col s={3} className='grid-example'><img src={this.props.data.images.low_resolution.url} /></Col>  
      </div>
    ); 
  }
}

export default Image;