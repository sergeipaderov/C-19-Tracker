import React, { Component } from "react";

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

class App extends Component {
    state = {
        data: {},
        conutry: ''
    }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data })
  }

  handleCountryChange = async country => {
    const data = await fetchData(country);

    this.setState({ data: data, country: country })
  }

  render() {
      const { data, country } = this.state

    return (
      <div className={styles.container}>
        {/* <h1>Covid-19</h1> */}
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
