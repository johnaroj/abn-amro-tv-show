import { mount } from '@vue/test-utils'
import Searchbar from '@/components/Searchbar.vue'

describe('Searchbar', () => {
    it('renders Searchbar', () => {
        const wrapper = mount(Searchbar)
        expect(wrapper.findComponent(Searchbar).exists()).toBe(true)
    })
})
