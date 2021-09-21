import { shallowMount } from "@vue/test-utils";
import Loader from "@/components/Loader.vue";

describe("Loader.vue", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(Loader);
    });

    it("should mount", () => {
        expect(wrapper.exists()).toBe(true);
    });

    it("should have <h1 class'text-white text-2xl'>Loading...</h1>", () => {
        const title = wrapper.find("h1");
        expect(title.html()).toContain('Loading...')
    });
});