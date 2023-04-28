<template>
  <div class="todos">
      <v-container fluid>
          <nuxt-link to="/"><h4>투두 리스트</h4></nuxt-link>
          <v-container class="todo-section">
              <v-card v-for="todo in todos" :key="todo" class="ma-3">
                  <v-card-title>{{todo.title}}</v-card-title>
                  <v-card-subtitle></v-card-subtitle>
                  <v-card-text>{{todo.content}}</v-card-text>
              </v-card>
          </v-container>
      </v-container>
  </div>
</template>

<script setup lang="ts">
import data from '~/assets/javascripts/data'

const todos = ref([...data]);
</script>

<style scoped>
  .todo-section {
      width: 600px;
  }
</style>