import React, { Component } from "react";
import { Grid, Segment, Loader } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";

import getChunks from "./utilities/getChunks";

import Layout from "./components/Layout";
import Container from "./components/Container";
import List from "./components/List";
import Display from "./components/Display";

class App extends Component {
  constructor() {
    super();
    this.onClickRow = this.handleSelection.bind(this);
    this.state = {
      data: [],
      loading: true
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/photos/")
      .then(res => {
        return res.json();
      })
      .then(data => {
        let sliced = getChunks(data);
        return sliced;
      })
      .then(datasets => {
        this.setState({ data: datasets, loading: false });
      });
  }

  handleSelection(e, url) {
    e.preventDefault();
    this.setState({ currentImage: url });
  }

  render() {
    if (!this.state.loading) {
      return (
        <Container>
          <Segment>
            <Layout>
              <Grid.Column>
                <List
                  datasets={this.state.data}
                  handleSelection={this.onClickRow}
                />
              </Grid.Column>
              <Grid.Column>
                <Display src={this.state.currentImage} />
              </Grid.Column>
            </Layout>
          </Segment>
        </Container>
      );
    } else {
      return <Loader />;
    }
  }
}

export default App;
