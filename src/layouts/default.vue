<template>
    <div>
        <div id="app">
            <nav>
                <nuxt-link to="/">Home</nuxt-link>
                <nuxt-link to="/todos">Todos</nuxt-link>
                <nuxt-link to="/practice">Practice</nuxt-link>
            </nav>
        </div>
        <slot/> <!-- Nuxt3부턴 nuxt-page대신 slot을 사용-->
    </div>
</template>

<script>
export default {
    name: "default"
}
</script>

<style scoped lang="scss">
%main-display {
  display: flex;
  justify-content: center;
  align-items: center;
}
#app{
  @extend %main-display;
  flex-direction: column;
}
body{
  @extend %main-display;
  margin: 0;
}
nav {
  @extend %main-display;
  background-color: black;
  width: 100vw;
  & > a {
    text-decoration: none;
    font-weight: bold;
    color: white;
    margin: 10px;
    &:hover {
      color: darken(white, 30%);
    }
  }
}
</style>