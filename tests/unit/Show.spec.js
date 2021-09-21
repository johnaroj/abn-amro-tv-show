import { mount, shallowMount } from "@vue/test-utils"
import Show from '@/views/Show.vue'
import Home from '@/views/Home.vue'
import Action from '@/views/Action.vue'
import Comedy from '@/views/Comedy.vue'
import Thriller from '@/views/Thriller.vue'

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/show/:id',
            name: 'Show',
            component: Show
        }
    ]
})
describe('Show', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(Show, {
            props: {
                id: 1337,
                name: "Movie",
                images: {
                    medium: "https://static.tvmaze.com/uploads/images/medium_portrait/1/3788.jpg",
                    original: "https://static.tvmaze.com/uploads/images/original_untouched/1/3788.jpg"
                },
                rating: {
                    average: 5
                }
            },
            global: {
                plugins: [router]
            }
        })
    })
    it("should mount", () => {
        expect(wrapper.exists()).toBe(true);
    });


    it('check if the path is correctly', async () => {
        router.push('/show/:id')
        await router.isReady()
        expect(wrapper.findComponent(Show).exists()).toBe(true)
    })
})