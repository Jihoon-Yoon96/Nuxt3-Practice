<template>
    <div>
        <h1 class="text-3xl font-bold">Home</h1>
        <div v-if="pending">Loading..</div>
        <template v-else>
            <div v-if="error">Sorry, error occured.</div>
            <div v-else>{{ data }}</div>
        </template>

        <button @click="refresh()">Refresh</button>
    </div>
</template>

<script setup lang="ts">
const { data, pending, error, refresh } = await useFetch(
    // 'https://jsonplaceholder.typicode.com/todos/1'
    'https://actdev.i-on.net/api/deploy/client/port', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJicmlhbiIsImV4cCI6MTY4NTEwMTIyNH0.tdF9eUQKZo3459R-bqLEe6acCHQDAPbnq1dtjaPB4SMrTHyM96GBxm0uSM42ZqVtVRR1Xs_pNxzTBXP6raDmnQ',
        },
        body: JSON.stringify({
            hostIp: '127.0.0.1',
            port: '6204',
        })
    }
)
</script>