import React, { Component }                  from "react";
import { Navbar, Footer, Button, Icon, Row } from "react-materialize";
import Image                                 from "./Image.jsx";
import request                               from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      imageData: null,
      error: null
    };
  }
  componentWillMount() {
    request.get('http://localhost:3000/api/photos')
      .then((data) =>{
        this.setState({imageData: data.data.data});
      })
      .catch((err) =>{
        this.setState({error: err});
      });
  }
  fetchImages() {
    console.log('get more images, use the pagination from the imageData state');
  }
  render() {
    let imageData = [];
    let error;

    if(this.state.imageData !== null){
      imageData = this.state.imageData;
    }   

    if(error !== null){
      error = this.state.error;
    }
    return(
      <div>
        <Navbar brand="@PHOTOGENICFOODIES" right>
        </Navbar>
          <h1>{error}</h1>
          <Row className="imgRow">
            {imageData.map((img, i) =>
              <Image key={i} data={img} />
            )}
          </Row>
          <p>
            <Button className="loadbtn" waves='light' onClick={this.fetchImages.bind(this)}>Load More<Icon left>cloud</Icon></Button>
          </p>
        <Footer className="footer" copyrights="&copy; 2017 Copyright"
          links={
            <ul>
              <li><a className="grey-text text-lighten-3" href="https://www.instagram.com/photogenicfoodies/">Instagram</a></li>
            </ul>
          }
          className='example'
          >
            <h5 className="white-text">@photogenicfoodies</h5>
            <p className="grey-text text-lighten-4">
              Photogenic Foodies SF Taste testing San Francisco one 
              mouthful at a time 📸🍴 * San Francisco's Best Eats & Sweets *
            </p>
        </Footer>
      </div>
    ); 
  }
}

export default App;