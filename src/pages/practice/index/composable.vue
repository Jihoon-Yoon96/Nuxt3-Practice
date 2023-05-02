<template>
    <div>
        <p>{{ counter.state.count }}</p>
        <button @click="counter.increment">+</button>
        <button @click="counter.decrement">-</button>
    </div>
</template>

<script setup lang="ts">
import { useCounter } from '@/composables/counter'

const counter = useCounter()

// `useCounter`가 반환하는 값은 reactive한 객체이므로, `toRefs`를 사용하여 컴포넌트 템플릿에서 `counter` 객체를 분리합니다.
const { state, increment, decrement } = counter
import { toRefs } from '@nuxtjs/composition-api'
// export default {
//     setup() {
//         return {
//             // `toRefs` 함수를 사용하여 분리한 `state` 객체의 프로퍼티들을 개별적으로 반환합니다.
//             ...toRefs(state),
//             increment,
//             decrement,
//         }
//     }
// }
</script>

<style scoped>
/* 스타일 코드 */
</style>
