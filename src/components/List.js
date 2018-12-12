import React, { Component, Fragment } from "react";
import { Table, Pagination } from "semantic-ui-react";

import Heading from "./Heading";
import PaginationWrapper from "./PaginationWrapper";

class List extends Component {
  constructor(props) {
    super(props);
    this.data = props.datasets;
    this.totalPages = this.data.length;
    this.handleSelection = props.handleSelection.bind(this);
    this.state = {
      activePage: 1
    };
  }

  handlePaginationChange(e, { activePage }) {
    console.log(activePage);
    this.setState({ activePage });
  }

  renderBody(data) {
    return data.map((item, index) => {
      return (
        <Table.Row
          key={index}
          onClick={e => this.handleSelection(e, item.url)}
          style={{ cursor: "pointer" }}
        >
          <Table.Cell>{item.id}</Table.Cell>
          <Table.Cell>{item.title}</Table.Cell>
        </Table.Row>
      );
    });
  }

  render() {
    return (
      <Fragment>
        <Table basic="very" selectable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan="2">
                <Heading>Welcome back!</Heading>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.renderBody(this.data[this.state.activePage - 1])}
          </Table.Body>
        </Table>
        <PaginationWrapper>
          <Pagination
            activePage={this.state.activePage}
            onPageChange={this.handlePaginationChange.bind(this)}
            totalPages={this.totalPages}
            boundaryRange={0}
            siblingRange={1}
            size="mini"
          />
        </PaginationWrapper>
      </Fragment>
    );
  }
}

export default List;
