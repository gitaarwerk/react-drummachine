import React from 'react';
import { shallow } from 'enzyme';

import LED from '../LED';

describe('Delete button', () => {
  test('renders correctly when light is ON', () => {
    const component = shallow(<LED lightState={true} />);

    expect(component).toMatchSnapshot();
  });

  test('renders correctly when light is OFF', () => {
    const component = shallow(<LED lightState={false} />);

    expect(component).toMatchSnapshot();
  });
});
