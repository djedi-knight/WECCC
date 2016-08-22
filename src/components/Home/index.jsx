import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/action_creators';
import style from './style';

export const Home = React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className={style.home}>
        <div className={style.header}>
          <h1>
            Improving Value by Exploring Data
          </h1>
          <img
            alt="main"
            src="https://placeimg.com/800/450/nature"
            style={{ width: '500px', height: '300px' }}
          />
          <p><i>
            This tool has been developed by the ENCOMPASS Community project.
          </i></p>
          <p><i>
            It is an opportunity to allow home, community, long-term home
            providers and mangers as well as community
            professionals to explore and to understand the outcomes of their
            efforts on the population they serve.
          </i></p>
          <h3>What you do has an impact on the ecosystem of care</h3>
          <img
            alt="header"
            src="https://s31.postimg.org/hla3xitq3/imageedit.jpg"
            style={{ width: '500px', height: '150px' }}
          />
          <br />
        </div>
        <div className={style.sharedGoalsSection}>
          <hr />
          <b>Shared Goals</b>
          <br />
          <p>
            By putting the data into your hands, you can affect the ecosystem
            of care and help achieve the shared goals of the system.
          </p>
          <section>
            <table className={style.table}>
              <tbody>
                <tr>
                  <th>OPTIMIZE RESOURCES</th>
                  <th>IMPROVE EXPERIENCES</th>
                  <th>IMPROVE HEALTH OUTCOMES</th>
                </tr>
              </tbody>
            </table>
          </section>
          <br />
          <p><small>
            <a href="#">Read more about the shared goals</a>
          </small></p>
          <br />
        </div>
        <div className={style.dataSourcesSection}>
          <section>
            <hr />
            <b>Data Sources</b>
            <br />
            <p>
              The information in this reporting tool is composed of data sets
              that will help you to view your outcomes over time and compared
              to your peers.
            </p>
            <small><a href="#">Read more about the data sources</a></small>
          </section>
        </div>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    test: 'Works!',
    state
  };
}

export const HomeContainer = connect(
  mapStateToProps,
  actionCreators
)(Home);
