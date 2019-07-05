<template>
  <div id="app">
    <keep-alive exclude="Detail"> <!-- 除Detail之外的页面都会被缓存，每次进入Detail时mounted都会被执行 -->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style></style>
