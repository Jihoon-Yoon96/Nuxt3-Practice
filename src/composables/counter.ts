// import { reactive } from '@nuxtjs/composition-api'

export default function useCounter () {
    const state = reactive({
        count: 0
    })

    function increment() {
        state.count++
    }

    function decrement() {
        state.count--
    }

    return {
        state,
        increment,
        decrement
    }
}
