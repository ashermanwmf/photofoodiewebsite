import React, { Component } from "react";
import { Modal }            from "react-materialize";

class Image extends Component {
  constructor(props) {
    super(props);
  }
  openModal(imageData) {
    //need to set modal and informaiton in redux 
    console.log(imageData);
  }
  render() {
    let columnClass = window.innerWidth < 750 ? "col s12 photostream-column" : "col s3 photostream-column";
    let modalColumnClass = window.innerWidth < 750 ? "col s12 photo-modal" : "col s6 photo-modal";
    let header = this.props.data.caption === null ? "Location information" : this.props.data.caption.text;

    return(
      <Modal
        header={header}
        fixedFooter
        trigger={
          <div className={columnClass}>
            <img 
              className="photostream-photo" 
              src={this.props.data.images.standard_resolution.url}
              onClick={() => this.openModal(this.props.data)} 
            />
          </div>
        }>
        <div className="row modal-container">
          <div className={modalColumnClass}>
            <img 
                className="photostream-photo" 
                src={this.props.data.images.low_resolution.url}
                onClick={() => this.openModal(this.props.data)} 
            />
          </div>
          <div className={modalColumnClass}>
          </div>
        </div>
      </Modal>
    ); 
  }
}

export default Image;
