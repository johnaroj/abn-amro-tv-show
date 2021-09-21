import { toRefs, reactive } from 'vue'

export default function (genre) {
    const state = reactive({
        data: [],
        loading: true,
        error: null
    })
    const fetchData = async () => {
        try {
            const res = await fetch('https://api.tvmaze.com/shows');
            const json = await res.json()
            state.data = json.filter(show => show.genres.includes(genre));
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

