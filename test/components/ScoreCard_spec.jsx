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
});
