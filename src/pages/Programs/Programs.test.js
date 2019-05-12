import React from 'react';
import { mount } from 'enzyme';
import wait from 'waait';
import * as api from '../../utils/api';
import Programs from './index';

import data from '../../feed/sample.json';

describe('Programs', () => {
  beforeEach(() => {
    api.getPrograms = jest
      .fn()
      .mockReturnValue(Promise.resolve(api.filterData(data)));
  });

  it('should fetch programs when mounted', () => {
    mount(<Programs type="movie" />);
    expect(api.getPrograms).toHaveBeenCalled();
  });

  it('should only display the first 21 entries', async () => {
    const wrapper = mount(<Programs type="movie" />);
    await wait(0);

    wrapper.update();
    expect(wrapper.find('ProgramItem')).toHaveLength(21);
  });

  it('should display items based on type', async () => {
    const wrapper = mount(<Programs type="movie" />);
    await wait(0);

    wrapper.update();
    wrapper.find('ProgramItem').forEach(item => {
      expect(item.props().program.programType).toEqual('movie');
    });
  });
});
