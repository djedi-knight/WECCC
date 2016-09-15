import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { ScoreCard } from '../../src/components/ScoreCard';

describe('ScoreCard', () => {
  it('renders a default title with no input parameters', () => {
    const result = shallow(<ScoreCard />);
    expect(result.find('#title')).to.have.length(1);
    expect(result.find('#title').text()).to.contain('<Title>');
  });

  it('renders a title property correctly', () => {
    const result = shallow(<ScoreCard title="Test Title" />);
    expect(result.find('#title').text()).to.contain('Test Title');
  });

  it('renders a default score with no input parameters', () => {
    const result = shallow(<ScoreCard />);
    expect(result.find('#score')).to.have.length(1);
    expect(result.find('#score').text()).to.contain('<Score>');
  });

  it('renders a score property correctly', () => {
    const result = shallow(<ScoreCard score="Test Score" />);
    expect(result.find('#score').text()).to.contain('Test Score');
  });

  it('does not render a peer score by default', () => {
    const result = shallow(<ScoreCard />);
    expect(result.find('#peerScore')).to.have.length(0);
  });

  it('renders a peer score property correctly', () => {
    const result = shallow(<ScoreCard peerScore="Test Peer Score" />);
    expect(result.find('#peerScore').text()).to.contain('Test Peer Score');
  });

  it('does not render a trendline by default', () => {
    const result = shallow(<ScoreCard />);
    expect(result.find('#trend')).to.have.length(0);
  });

  it('renders a trendline property correctly', () => {
    const result = shallow(<ScoreCard trend="Test Trendline" />);
    expect(result.find('#trend').text()).to.contain('Test Trendline');
  });

  it('does not render a warning by default', () => {
    const result = shallow(<ScoreCard />);
    expect(result.find('#warning')).to.have.length(0);
  });

  it('renders a warning property correctly', () => {
    const result = shallow(<ScoreCard warning="Test Value"/>);
    expect(result.find('#warning').text()).to.contain('Test Value');
  });
});
