import React, { Fragment } from "react";
import { Responsive, Grid } from "semantic-ui-react";

const Layout = ({ children }) => (
  <Fragment>
    <Responsive maxWidth={799}>
      <Grid columns={1} divided>
        {children}
      </Grid>
    </Responsive>
    <Responsive minWidth={800}>
      <Grid columns={2} divided>
        {children}
      </Grid>
    </Responsive>
  </Fragment>
);

export default Layout;
