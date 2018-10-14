<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <div>
      <router-link to="/firstPage">Go to FirstPage</router-link>
      <router-link to="/secondPage">Go to SecondPage</router-link>
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
