import { toRefs, reactive, onMounted } from 'vue'

export default function () {
    const state = reactive({
        data: [],
        loading: true,
        error: null
    })
    const fetchData = async () => {
        try {
            const res = await fetch('https://api.tvmaze.com/shows');
            const json = await res.json()
            state.data = json.sort(function (a, b) { return b.rating.average - a.rating.average });
        } catch (error) {
            state.error = error
        } finally {
            state.loading = false
        }
    }
    onMounted(() => {
        fetchData();
    })



    return {
        ...toRefs(state)
    }
}

