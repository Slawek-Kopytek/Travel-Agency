import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('Test 1: should generate corect url link without crashing', () => {
    const expectedId = 'abc';
    const exceptedLink = '/trip/abc';
    const component = shallow(<TripSummary id={expectedId} tags={[]} />);
    expect(component.find('.link').prop('to')).toEqual(exceptedLink);
  });

  it('Test 2: should check image src and alt', () => {
    const expectedImage = 'image.jpg';
    const component = shallow(<TripSummary id={'id'} image={expectedImage} tags={[]} />);

    expect(component.find('img').prop('src', 'alt')).toEqual(expectedImage);
  });

  it('Test 3: should render correct props', () => {
    const expectedName = 'name';
    const expectedCost = '200';
    const expectedDays = 4;
    const component = shallow(<TripSummary name={expectedName} cost={expectedCost} days={expectedDays} tags={[]} />);

    expect(component.find('.title').text()).toEqual(expectedName);
    expect(component.find('.details span').at(0).text()).toEqual(expectedDays);
    expect(component.find('.details span').at(1).text()).toEqual(expectedCost);
  });

  it('Test 4: should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('Test 5: should render three tags', () => {
    const expectedTags = ['tag1', 'tag2', 'tag3'];
    const component = shallow(<TripSummary tags={expectedTags} />);
    expect(component.find('.tags span').at(0).text()).toEqual(expectedTags[0]);
    expect(component.find('.tags span').at(1).text()).toEqual(expectedTags[1]);
    expect(component.find('.tags span').at(2).text()).toEqual(expectedTags[2]);
  });

  it('Test 6: should not render div tags if props tags is false or array is not given', () => {
    const expectedTags = ['tag1', 'tag2', 'tag3'];
    const component = shallow(<TripSummary tags={expectedTags} />);
    expect(component.hasClass('tags')).toBe(false);
  });




});
