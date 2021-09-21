import { toRefs, reactive } from 'vue'
import { api } from '@/config'

export default function () {
    const state = reactive({
        data: [],
        loading: true,
        error: null
    })

    const fetchData = async () => {
        try {
            console.log()
            const res = await fetch(`${api}/shows`);
            const json = await res.json()
            state.data = json.sort(function (a, b) { return b.rating.average - a.rating.average });
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

