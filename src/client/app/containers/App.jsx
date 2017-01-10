import React, { Component }             from "react";
import { Navbar, Footer, Button, Icon } from "react-materialize";
import { connect }                      from 'react-redux';
import { bindActionCreators }           from 'redux';
import Image                            from "../components/Image.jsx";
import request                          from "axios";
import initialPhotosAction              from "../actions/initial-photos";
import { API_KEY }                      from "../../../../gmapsConfig/config";

class App extends Component {
  constructor() {
    super();
    this.state = {
      error: null
    };
  }
  componentWillMount() {
    request.get('/api/photos')
      .then((data) =>{
        this.props.initialPhotosAction(data.data.data);
      })
      .catch((err) =>{
        this.setState({error: err});
      });
  }
  fetchImages() {
    console.log('get more images, use the pagination from the imageData state');
  }
  render() {
    let images;
    let message;

    if(this.props.photoStore.length !== 0){
      images = this.props.photoStore;
    }else {
      message = "Loading ...";
      images = [];
    }

    if(this.state.error !== null){
      message = this.state.error;
    }

    return(
      <div>
        <nav>
          <h4>@PHOTOGENICFOODIES</h4>
        </nav>

        <section className="main-content">
          <h1>{message}</h1>
            <div className="row">
              {images.map((img, i) =>
                <Image key={i} data={img} />
              )}
            </div>
          <center>
            <Button className="loadbtn" waves='light' onClick={this.fetchImages.bind(this)}>Load More</Button>
          </center>
        </section>

        <Footer className="footer" copyrights="&copy; 2017 Copyright"
          links={
            <ul>
              <li>
                <a className="grey-text text-lighten-3" href="https://www.instagram.com/photogenicfoodies/">
                  <i className="fa fa-4x fa-instagram" aria-hidden="true"></i> Instagram
                </a>
              </li>
            </ul>
          }
        >
          <h5 className="white-text">@photogenicfoodies</h5>
          <h6 className="grey-text text-lighten-4">
            Photogenic Foodies SF Taste testing San Francisco one 
            mouthful at a time 📸🍴 * San Francisco's Best Eats & Sweets *
          </h6>
        </Footer>
      </div>
    ); 
  }
}

function mapStateToProps(state) {
  return {
    photoStore: state.photoStore
  };
}

export default connect(mapStateToProps, {
  initialPhotosAction: initialPhotosAction
})(App);
