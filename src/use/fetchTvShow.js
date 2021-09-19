import { toRefs, reactive } from 'vue'

export default function (id) {
    const state = reactive({
        data: [],
        loading: true,
        error: null
    })

    const fetchData = async () => {
        try {
            const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
            const json = await res.json()
            state.data = json;
        } catch (error) {
            state.error = error
        } finally {
            state.loading = false
        }
    }

    fetchData();


    return {
        ...toRefs(state)
    }
}

