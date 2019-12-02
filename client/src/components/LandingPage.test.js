import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './LandingPage';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import { mount } from 'enzyme';


configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LandingPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});

const wrapper = mount(<LandingPage type='text' />);
it('renders search name input tag', () => {
  const input = wrapper.find('input');

  expect(input).toHaveLength(1);
  expect(input.prop('type')).toEqual('text')
});