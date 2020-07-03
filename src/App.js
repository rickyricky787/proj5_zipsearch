import React, { Component } from "react";
import LogoBar from "./components/LogoBar";
import SearchBar from "./components/SearchBar";
import Results from "./components/Results";
import axios from "axios";

class App extends Component {
  constructor(props) {
  super(props);
    this.state = {
      zipcode: null,
      cities: null,
    };
  }

  async componentDidMount() {
    if (this.state.zipcode)
    {
      return this.getZipSearch(this.state.zipcode);
    }
  }

  
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  onSubmitZip = async (e) => {
    return this.getZipSearch(this.state.zip);
  }

  getZipSearch = (zipcode) => {
    axios.get(`https://ctp-zip-api.herokuapp.com/zip/${zipcode}`)
    .then((res) => {
      if (res.data)
        this.setState({
          cities: res.data,
        });
    })
  };

  render() {
    return (
      <React.Fragment>
        <LogoBar
        />
        <SearchBar
          onSubmit={this.onSubmitZip}
          onChange={this.handleChange}
        />
        <br></br>
        <Results
          cities={this.state.cities}
        />
      </React.Fragment>
    );
  }
}

export default App;