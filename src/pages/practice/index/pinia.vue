<template>
    <h2>Pinia</h2>

    <div>
        <div class="flex pa-2">
            <h3>index.value1 : {{index.value1}}</h3> ||
            <h3>test : {{test}}</h3>
        </div>
        <div class="flex pa-2">
            <h3>index.combinedValue : {{index.combinedValue}}</h3>||
            <h3>test2 : {{test2}}</h3>
        </div>
        <v-btn color="primary" @click="add">클릭하면 값 변화</v-btn>

        <h1></h1>
    </div>
</template>

<script setup lang="ts">
import {useIndexStore} from "~/store";
import {onMounted} from "#imports";

const index = useIndexStore()
const test = computed(() => index.value1); // nuxt3에선 $set이 사라져서, computed로 객체 변경값을 감지해야 됨
const test2 = computed(() => index.combinedValue);

// watch 객체 변경 감지 예시
// watch(
//     () => index.value1,
//     (newVal) => {
//         test.value = newVal;
//     }
// );
//
// watch(
//     () => index.combinedValue,
//     (newVal) => {
//         test2.value = newVal;
//     }
// );

function add(){
    index.add()
}

onMounted( () =>{
    console.log(index)
})
</script>

<style scoped>
.flex {
    display: flex;
}
</style>