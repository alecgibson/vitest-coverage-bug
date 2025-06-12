import { describe, it } from 'vitest';
import { mount } from '@vue/test-utils';
import App from './App.vue';

describe('App', () => {
  it('tests', ({ expect }) => {
    const app = mount(App);
    expect(app.exists()).to.be.true;
  });
});
