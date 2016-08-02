import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Avatar from 'react-toolbox/lib/avatar';
import Chip from 'react-toolbox/lib/chip';


export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className="GeneralPatientPopulationInfographic">
  <Chip>
      <Avatar style={{backgroundColor: 'deepskyblue'}} icon="200,000" />
      <span>Total Population Percentage</span>
    </Chip>
    <Chip>
      <Avatar style={{backgroundColor: 'deepskyblue'}} icon="40" />
      <span>Percentage Aging Population</span>
    </Chip>
 <Chip>
      <Avatar style={{backgroundColor: 'deepskyblue'}} icon="10" />
      <span>Needs Assessment</span>
    </Chip>
     <Chip>
      <Avatar style={{backgroundColor: 'deepskyblue'}} icon="240,000" />
      <span>Patients Well</span>
    </Chip>
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
