import React, { Component } from "react";
import { Col }              from "react-bootstrap";

class Image extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <Col xs={1} md={3} className='grid-example'><img src={this.props.data.images.low_resolution.url} /></Col>  
      </div>
    ); 
  }
}

export default Image;