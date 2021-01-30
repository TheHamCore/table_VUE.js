<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'App',
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API'
    ]),
  },

  async mounted () {
    await this.GET_PRODUCTS_FROM_API()
      .then((products) => {
        if (products) {
          console.log('data arrived')
        }
      })
  }
}
</script>

<style>

</style>
