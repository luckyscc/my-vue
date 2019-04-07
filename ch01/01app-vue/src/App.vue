<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Hello World1"/>
    <ev/>
    <com :age2="ages" @patch1="msg">
      插槽slot
      <h1 slot="a">aa</h1>
      <div slot="b">bb</div>
    </com>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import './components/n'
import ev from './components/events.vue'
import com from './components/com.vue'
import Vuexx from './components/vuex.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    ev,
    com,
    Vuexx
  },
  data() {
    return {
      ages: 32
    }
  },
  methods: {
    msg: function(ag) {
      this.ages ++
      window.console.log(ag)
    }
  },
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
