import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App', () => {
  it('should renders a Light and a Dark text', () => {
    const wrapper = shallowMount(App, {
      stubs: {
        'weather-card': '<div />'
      }
    })
    expect(wrapper.text()).toContain('Dark')
    expect(wrapper.text()).toContain('Light')
  })
})
