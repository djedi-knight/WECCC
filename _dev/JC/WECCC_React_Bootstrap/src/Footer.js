import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';

export default class Footer extends React.Component {
  render() {
    return (
      <Grid>
        <hr />
        <footer>
          <p>© WECCC 2016</p>
        </footer>
      </Grid>
    );
  }
}
