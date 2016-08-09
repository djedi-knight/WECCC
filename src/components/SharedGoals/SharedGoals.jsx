import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ProgressBar from 'react-toolbox/lib/progress_bar';
import theme from '../../theme/default';

export default React.createClass({
  mixins: [PureRenderMixin],
  getInitialState() {
    return { progress: 30 };
  },
  render() {
    return (
      <div style={{ padding: 10 }} >
        <ProgressBar mode="determinate" value={this.state.progress} />
        <b style={{ fontSize: 20 }}>Shared Goals</b>
        <br />
        <p>By putting the data into your hands, you can affect the ecosystem
          of care and help achieve the shared goals of the system.
        </p>
        <section>
          <table className={theme.sharedGoalsTable}>
            <tbody>
              <tr style={{ padding: 8 }}>
                <th>OPTIMIZE RESOURCES</th>
                <th>IMPROVE EXPERIENCES</th>
                <th>IMPROVE HEALTH OUTCOMES</th>
              </tr>
            </tbody>
          </table>
        </section>
        <br />
        <p><small><a href="#">Read more about the shared goals</a></small></p>
        <br />
      </div>
    );
  }
});
