<template>
  <div class="main">
      <div class="left">
          <v-layout>
              <v-navigation-drawer  absolute>
                  <v-list>
                      <v-list-item
                              prepend-avatar="https://cdn.vuetifyjs.com/images/john.png"
                              title="넉스트 문법 연습장"
                              subtitle="Nuxt3"
                      >
                          <template v-slot:append>
                              <v-btn
                                      size="small"
                                      variant="text"
                                      icon="mdi-menu-down"
                              ></v-btn>
                          </template>
                      </v-list-item>
                  </v-list>

                  <v-divider></v-divider>

                  <v-list
                          :lines="false"
                          density="compact"
                          nav
                  >
                      <v-list-item
                              v-for="(item, i) in items"
                              :key="i"
                              :value="item"
                              active-color="primary"
                      >
                          <nuxt-link :to="item.url">

                             <template v-slot:prepend>
                                 <v-icon :icon="item.icon"></v-icon>
                             </template>

                          <v-list-item-title>{{item.text}}</v-list-item-title>
                          </nuxt-link>
                      </v-list-item>
                  </v-list>
              </v-navigation-drawer>

              <v-main style="height: 354px;"></v-main>
          </v-layout>
      </div>
      <div class="right">
          <nuxt-page/>
      </div>
  </div>
</template>

<script setup lang="ts" >

    let selectedItem: number = 0;
    const items: Array<Object> = [
        { text: 'ref vs reactive', icon: 'mdi-folder', url:'/practice/ref' },
        { text: 'emitter', icon: 'mdi-account-multiple', url:'/practice/emitter' },
        { text: 'composable', icon: 'mdi-history', url:'/practice/composable' },
        { text: 'Pinia', icon: 'mdi-check-circle', url:'/practice/pinia' },
        { text: 'Dynamic Routing', icon: 'mdi-upload', url:'/practice/dynamic' },
        { text: 'TypeScript', icon: 'mdi-star', url:'/practice/typescript' },
        { text: '-', icon: 'mdi-cloud-upload', url:'/practice/' },
    ];


</script>

<style scoped>
.main{
    width: 100%;
    display: flex;
    justify-content: ;
}
.left{
    width: 30%
}
.right{
    width: 70%
}
</style>