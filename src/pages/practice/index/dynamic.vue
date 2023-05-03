<template>
  <h2>Dynamic Routing</h2> <br>

  <ul>
      <li v-for="(list, li) in lists" :key="li">
          <nuxt-link :to="{path:`/practice/${list.id}`, query:{id:list.id}}" >{{list.title}}</nuxt-link>
      </li>
  </ul>
</template>

<script setup lang="ts">
import {SymbolKind} from "vscode-languageserver-types";
import Array = SymbolKind.Array;

const lists = ref<object>([
    {title: 'first', id:1},
    {title: 'second', id:2},
    {title: 'third', id:3},
])
</script>

<style scoped>

</style>