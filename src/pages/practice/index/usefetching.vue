<template>
    <div>
        <p v-if="isLoading">Loading...</p>
        <p v-else-if="error">Error: {{ error }}</p>
        <ul v-else>
<!--            <li v-for="post in posts" :key="post.id">{{ post.title }}</li>-->
            success
        </ul>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useFetch } from 'nuxt-composition-api';

const createPort = async () => {
    const response = await fetch('https://actdev.i-on.net/api/deploy/client/port', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJicmlhbiIsImV4cCI6MTY4NTEwMTIyNH0.tdF9eUQKZo3459R-bqLEe6acCHQDAPbnq1dtjaPB4SMrTHyM96GBxm0uSM42ZqVtVRR1Xs_pNxzTBXP6raDmnQ',
        },
        body: JSON.stringify({
            hostIp: '127.0.0.1',
            port: '6204',
        }),
    });
    // console.log(response)
    if (!response.ok) {
        throw new Error('Failed to create port');
    }
    return await response.json();
};

const result = ref(null);
const error = ref(null);
const isLoading = ref(true);

onMounted(async () => {
    try {
        const data = await createPort();
        result.value = data;
        isLoading.value = false;
        console.log(result)
    } catch (err) {
        error.value = err.message;
        isLoading.value = false;
    }
});
</script>

