<template>
다이내믹 라우팅 페이지 <br>
    query : {{queryParam}} <br>
  <nuxt-link to="/practice/dynamic">돌아가기</nuxt-link>
</template>

<script setup lang="ts">

const router = useRouter()
const queryParam = ref<number>()

onMounted(() => {
    console.log(router)
    queryParam.value = router.currentRoute.value.query.id
})
</script>

<style scoped>

</style>