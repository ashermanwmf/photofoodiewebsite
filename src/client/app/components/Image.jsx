import React, { Component } from "react";
import { Modal }            from "react-materialize";

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapOptions: {
        zoom: 14,
        center: new google.maps.LatLng(37.787507, -122.399838),
        mapTypeId: "roadmap",
        mapTypeControl:false,
        scrollwheel: false,
        streetViewControl: false,
        panControl: false,
        rotateControl: false,
        zoomControl: true,
        zoomControlOptions: {
          position: google.maps.ControlPosition.LEFT_CENTER
        },
        styles: [{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"color":"#f7f1df"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#d0e3b4"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.medical","elementType":"geometry","stylers":[{"color":"#fbd3da"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#bde6ab"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffe15f"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#efd151"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"black"}]},{"featureType":"transit.station.airport","elementType":"geometry.fill","stylers":[{"color":"#cfb2db"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#a2daf2"}]}]
      }
    };
  }
  initMap() {
    let myLatLng = {lat: 37.787507, lng: -122.399838};
    let map = new google.maps.Map(this.refs.map, this.state.mapOptions); 

    let marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: "Test"
    });

    setTimeout(() =>{
      new google.maps.event.trigger(map, "resize");
      console.log("init map");
    }, 500);
  }
  render() {
    let columnClass = window.innerWidth < 750 ? "col s12 photostream-column" : "col s3 photostream-column";
    let modalColumnClass = window.innerWidth < 750 ? "col s12 photo-modal" : "col s6 photo-modal";
    let header = this.props.data.caption === null ? "Location information" : this.props.data.caption.text;

    return(
      <Modal
        className="modal"
        header={header}
        fixedFooter
        trigger={
          <div className={columnClass}>
            <img 
              className="photostream-photo" 
              src={this.props.data.images.standard_resolution.url}
              onClick={this.initMap.bind(this)}
            />
          </div>
        }>
        <div className="row modal-container">
          <div className={modalColumnClass}>
            <img 
                className="photostream-photo" 
                src={this.props.data.images.low_resolution.url}
            />
          </div>
          <div className={modalColumnClass}>
            <div className="gMap" ref="map" style={this.state.mapStyling}>I should be a map!</div>
          </div>
        </div>
      </Modal>
    ); 
  }
}

export default Image;
