<template>
  <div class="bod">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
    <div class="modalEvent"
        v-if="GET_MODAL_POS"
    >
      <div class="black-screen" />
      <curentPage class="modal" />
    </div>
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import EmptyLayout from './layouts/EmptyLayout.vue'
import MainLayout from './layouts/MainLayout.vue'
import { mapGetters } from 'vuex'
import curentPage from './components/currentEventPage.vue'

export default {
  components: {
    EmptyLayout,
    MainLayout,
    curentPage
  },
  data: () => ({}),
  computed: {
    ...mapGetters([
      'GET_MODAL_POS'
    ]),
    layout () {
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  },
  mounted() {}
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

  .bod {
    background-color: #F2F2F2;
  }
  .black-screen {
      width: 100%;
      height: 100%;
      position: absolute;
      overflow: hidden;
      overflow: -moz-hidden-unscrollable;
      z-index: 2;
      background-color: black;
      opacity: 70%;
  }
  .modal {
    position: absolute;
    z-index: 3;
    width: 100%;
    height: 100%;
  }
  .modalEvent {
    position: absolute;
    width: 99%;
    height: 100%;
  }
</style>
