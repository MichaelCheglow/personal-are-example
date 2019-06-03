<template>
  <div id="app">
    <div class="layout-default">
      <div class="layout-default__container container">
        <div class="layout-default__menu">
          <MenuMain/>
        </div>
        <div class="layout-default__pages">
          <router-view class="layout-default__page"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import MenuMain from '@/components/MenuMain.vue'
export default {
  name: 'app',
  components: {
    MenuMain
  },
  methods: {
    ...mapMutations([ 
      'loadPaymentHistory'
    ]),

    initPaymentHistory () {
      let paymentHistory = JSON.parse(localStorage.getItem('paymentHistory'))
      if (paymentHistory) this.loadPaymentHistory(paymentHistory)
    }
  },
  created () {
    this.initPaymentHistory()
  }
}
</script>

<style lang="scss">
@import './assets/css/main.scss';
@import './assets/css/icomoon/style.css';
</style>
