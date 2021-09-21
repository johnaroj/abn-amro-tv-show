import { toRefs, reactive } from 'vue'
import { api } from '@/config'

export default function (id) {
    const state = reactive({
        data: [],
        loading: true,
        error: null
    })

    const fetchData = async () => {
        try {
            const res = await fetch(`${api}/shows/${id}`);
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

