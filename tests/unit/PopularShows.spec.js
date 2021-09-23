import { mount } from '@vue/test-utils'
import PopularShows from '@/components/PopularShows.vue'

describe('PopularShows.vue', () => {
    it('renders PopularShows', () => {
        const wrapper = mount(PopularShows)
        expect(wrapper.findComponent(PopularShows).exists()).toBe(true)
        expect(wrapper.findComponent(PopularShows).exists()).toStrictEqual(true)
    })

    it('renders h2 with name popularShow', () => {
        const wrapper = mount(PopularShows);
        const element = wrapper.find("h2");
        expect(element.html()).toContain('Popular Tv Shows')
    })
})
