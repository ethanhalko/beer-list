import { describe, it, expect } from 'vitest';
import { mountSuspended } from 'nuxt-vitest/utils';
import BeerInfo from '../../components/BeerInfo.vue';

const testBeer = {
  id: 1,
  name: 'Saison D\'Ethan',
  description: 'A sour, hopped saison with notes of bergamot, cucumber',
  tagline: 'Great beer for writing tests',
  abv: 7,
  ibu: 65,
  image_url: '',
  ingredients: {
    hops: [
      {
        name: 'Cascade',
        amount: {
          value: 2.5,
          unit: 'grams'
        },
        add: 'start',
        attribute: 'bitter'
      },
      {
        name: 'Mosaic',
        amount: {
          value: 15,
          unit: 'grams'
        },
        add: 'end',
        attribute: 'flavour'
      },
      {
        name: 'Simcoe',
        amount: {
          value: 75,
          unit: 'grams'
        },
        add: 'dry hop',
        attribute: 'aroma'
      },
      {
        name: 'Lactose',
        amount: {
          value: 100,
          unit: 'grams'
        },
        add: 'middle',
        attribute: 'flavour'
      }
    ]
  }
};

describe('BeerInfoCard', async() => {
  const wrapper = await mountSuspended(BeerInfo, {
    global: {
      stubs: {
        fas: {
          template: '<span />',
        }
      }
    },
    props: { beer: testBeer }
  });

  it('renders a vue component', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it('matches snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('highlights if dry hopped', () => {
    const name = wrapper.find('.beer-name');
    expect(name.exists()).toBeTruthy();
    expect(name.classes()).toContain('bg-green-200');
  });

  it('warns of lactose', () => {
    const lactoseIcon = wrapper.find('.icon-lactose');
    expect(lactoseIcon.exists()).toBeTruthy();
  });

  it('expands when clicked', async () => {
    await wrapper.trigger('click');
    expect(wrapper.find('.description').exists()).toBeTruthy();

    await wrapper.trigger('click');
    expect(wrapper.find('.description').exists()).toBeFalsy();
  });
});
