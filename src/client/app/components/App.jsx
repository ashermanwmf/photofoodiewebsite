import React, { Component } from "react";
import request              from "axios";

class App extends Component {
  constructor() {
    super();
  }
  componentWillMount() {
    request.get('/api/photos')
      .then((data) =>{
        console.log("DATA", data);
      })
      .catch((err) =>{
        console.log("ERROR", err);
      });
  }
  render() {
    return(
      <div>hello</div>
    ); 
  }
}

export default App;