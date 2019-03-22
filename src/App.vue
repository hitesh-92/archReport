<template>
  <v-app>

    <v-content id="content" class="white">
      <router-view></router-view>
      <!-- <Links /> -->
    </v-content>

  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
// import Links from './components/Links'

export default {
  name: 'App',
  components: {
    // Links
  },
  data () {
    return {
      //
    }
  }
}
</script>
