<template>
  <div id="app">
    <h1 class="title">{{ title }}</h1>
    <div>
      <router-link to="/firstPage">Go to FirstPage</router-link>
      <router-link to="/secondPage">Go to SecondPage </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState(['title']),
};
</script>

<style lang="stylus" scoped>
.title {
  background-color: darken(blue, 50%);
  color: #fff;
}
</style>
