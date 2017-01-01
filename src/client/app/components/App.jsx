import React, { Component } from "react";
import request              from "axios";

class App extends Component {
  constructor() {
    super();
  }
  componentWillMount() {
    request.get('http://localhost:3000/api/photos')
      .then((data) =>{
        console.log(data.data, data.data.data)
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