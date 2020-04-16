import { shallowMount } from '@vue/test-utils'
import OverviewCard from '@/components/OverviewCard.vue'

describe('OverviewCard', () => {
  describe('mount the component', () => {
    const wrapper = shallowMount(OverviewCard, {
      propsData: {
        title: 'Overview',
        value: '5'
      }
    })

    it('renders the component', () => {
      expect(wrapper.exists()).toBeTruthy()
    })
  })
})
