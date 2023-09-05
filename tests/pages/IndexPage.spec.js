// @vitest-environment nuxt
import { describe, it, expect } from 'vitest';
import Index from '../../pages/index.vue';
import {  mountSuspended, registerEndpoint } from 'nuxt-vitest/utils';
import BeerInfo from '~/components/BeerInfo.vue';
import BeerListPayload from '../stubs/BeerListPayload.json';

registerEndpoint('https://api.punkapi.com/v2/beers?brewed_after=11-2012', () => BeerListPayload);

describe('BeerList', async () => {
  const wrapper = await mountSuspended(Index, {
    global: {
      stubs: {
        fas: () => ({
          template: '<span />'
        })
      }
    }
  });

  it('renders a vue component', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it('matches snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('filters centennial hops', () => {
    expect(wrapper.findAllComponents(BeerInfo).length).toBeLessThan(BeerListPayload.length);
  });

  it('orders by ABV desc', () => {
    const listValue = wrapper.getCurrentComponent().exposed?.beerList?.value;
    expect(listValue).toBeDefined();

    for (let i = 1; i < listValue.length; ++i) {
      expect(listValue[i].abv).toBeGreaterThan(listValue[i - 1].abv);
    }
  });
});
