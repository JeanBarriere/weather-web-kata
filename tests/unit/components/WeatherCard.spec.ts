import { shallowMount } from '@vue/test-utils'
import WeatherCard from '@/components/WeatherCard.vue'

describe('WeatherCard', () => {
  it('should mount', () => {
    const wrapper = shallowMount(WeatherCard)
    expect(wrapper.text()).toBe('I should show some weather information')
  })
})
