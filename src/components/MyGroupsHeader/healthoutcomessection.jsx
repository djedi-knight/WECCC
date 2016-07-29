import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Chip from 'react-toolbox/lib/chip';
import Avatar from 'react-toolbox/lib/avatar';
import PatientExperienceScoreBox from './PatientExperienceScoreBox';

export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
     <div className ="PatientExperienceScoreBox">
    <Chip>
     <small><PatientExperienceScoreBox/></small>
    </Chip>
      <Chip>
     <small><PatientExperienceScoreBox/></small>
    </Chip>
      <Chip>
     <small><PatientExperienceScoreBox/></small>
    </Chip>
      <Chip>
     <small><PatientExperienceScoreBox/></small>
    </Chip>
  </div>
    );
  }
});
