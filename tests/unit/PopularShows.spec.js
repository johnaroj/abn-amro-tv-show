import { mount } from '@vue/test-utils'
import PopularShows from '@/components/PopularShows.vue'

describe('PopularShows.vue', () => {
    it('renders PopularShows', () => {
        const wrapper = mount(PopularShows)
        expect(wrapper.findComponent(PopularShows).exists()).toBe(true)
    })
})
