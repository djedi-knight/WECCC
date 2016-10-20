import React from 'react';
import Fetch from 'react-fetch';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { RadioButton, RadioGroup } from 'react-toolbox';
import { Row, Col } from 'react-flexbox-grid';
import ScoreBoxSimple from '../ScoreBoxSimple';
import config from './config.json';
import style from './style';

export const VitalSignsSubgroup = React.createClass({
  propTypes: {
    scoreCards: React.PropTypes.array
  },
  mixins: [PureRenderMixin],
  getSubGroupFor(key) {
    if (this.props.scoreCards) {
      const index = this.props.scoreCards.findIndex(subGroup => subGroup.key === key);

      return this.props.scoreCards[index];
    }

    return {};
  },
  getScoreCardFor(subGroupKey, scoreCardKey) {
    const subGroup = this.getSubGroupFor(subGroupKey);
    if (subGroup.list) {
      const index = subGroup.list.findIndex(scoreCard => scoreCard.key === scoreCardKey);

      return subGroup.list[index];
    }

    return {};
  },
  render() {
    return (
      <div style={style.vitalSignsSubgroups}>
        <Row className={style.body}>
          <Col xs={2}>
            <ScoreBoxSimple
              title={this.getScoreCardFor('vital-signs-subgroup', 'government').title}
              score={this.getScoreCardFor('vital-signs-subgroup', 'government').score}
              trend={this.getScoreCardFor('vital-signs-subgroup', 'government').trend}
            />
          </Col>
          <Col xs={2}>
            <ScoreBoxSimple
              title={this.getScoreCardFor('vital-signs-subgroup', 'safety').title}
              score={this.getScoreCardFor('vital-signs-subgroup', 'safety').score}
              trend={this.getScoreCardFor('vital-signs-subgroup', 'safety').trend}
            />
          </Col>
          <Col xs={2}>
            <ScoreBoxSimple
              title={this.getScoreCardFor('vital-signs-subgroup', 'arts-culture').title}
              score={this.getScoreCardFor('vital-signs-subgroup', 'arts-culture').score}
              trend={this.getScoreCardFor('vital-signs-subgroup', 'arts-culture').trend}
            />
          </Col>
          <Col xs={2}>
            <ScoreBoxSimple
              title={this.getScoreCardFor('vital-signs-subgroup', 'transportation').title}
              score={this.getScoreCardFor('vital-signs-subgroup', 'transportation').score}
              trend={this.getScoreCardFor('vital-signs-subgroup', 'transportation').trend}
            />
          </Col>
          <Col xs={2}>
            <ScoreBoxSimple
              title={this.getScoreCardFor('vital-signs-subgroup', 'government').title}
              score={this.getScoreCardFor('vital-signs-subgroup', 'government').score}
              trend={this.getScoreCardFor('vital-signs-subgroup', 'government').trend}
            />
          </Col>
        </Row>
        <div className={style.vitalSignsReportLink}>
          <a href={this.state.config.reportLink.href}>
            {this.state.config.reportLink.title}
          </a>
        </div>
      </div>
    );
  }
});

export const VitalSigns = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    pieCharts: React.PropTypes.array,
    scoreCards: React.PropTypes.array
  },
  mixins: [PureRenderMixin],
  getInitialState() {
    return { value: 'vital-signs' };
  },
  getSubGroupFor(key) {
    if (this.props.scoreCards) {
      const index = this.props.scoreCards.findIndex(subGroup => subGroup.key === key);

      return this.props.scoreCards[index];
    }

    return {};
  },
  handleChange(value) {
    this.setState({ value });
  },
  render() {
    return (
      <div className={style.vitalSigns}>
        <div className={style.vitalSignsHeader}>
          {this.props.title}
        </div>
        <RadioGroup name="comic" value={this.state.value} onChange={this.handleChange}>
          <RadioButton label={this.getSubGroupFor('vital-signs-subgroup').title} value="vital-signs" />
          <RadioButton label={this.getSubGroupFor('self-reported-subgroup').title} value="self-reported" />
        </RadioGroup>
        {this.state.value === 'vital-signs' ?
          <VitalSignsSubgroup scoreCards={this.props.scoreCards} />
          : null
        }
        {this.state.value === 'self-reported' ?
          <VitalSignsSubgroup />
          : null
        }
      </div>
    );
  }
});

export const VitalSignsContainer = React.createClass({
  propTypes: {
    route: React.PropTypes.object
  },
  mixins: [PureRenderMixin],
  getInitialState() {
    return { config };
  },
  getURL() {
    if (this.props.route.demoRoute) {
      return this.state.config.demoAPI;
    }

    return this.state.config.prodAPI;
  },
  render() {
    return (
      <div>
        <Fetch url={this.getURL()}>
          <VitalSigns />
        </Fetch>
      </div>
    );
  }
});
