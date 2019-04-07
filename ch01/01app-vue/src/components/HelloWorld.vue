<template>
<div>
  <div>{{msg}}</div>
  <div v-html="msg1" v-bind:id="ids"></div>
  <div>{{msg2.split('').reverse().join('')}}</div>
  <div v-if="seen">我又来了</div>
  <div v-else>我又走了</div>
  <div v-n="99"></div>
  <div>我借你{{money}}, 你还我{{a}},还剩{{b}}</div>
  <div :class="[a1, a2]">数组</div>
  <div :class="{'test1': a3}">对象</div>
  <div :class="obj">对象</div>
  <div v-for="(items, i) in list" :key="items">{{items}}{{i}}</div>
  <ul>
    <template v-for="item in list">
      <li :key="item">hello</li>
      <li :key="item+1">{{item}}</li>
    </template>
  </ul>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      msg1: '<span style="color: #0094ff;">helloworld</span>',
      ids: 'test',
      msg2: 'abcd',
      seen: true,
      a: 1,
      money: 100,
      a1: 'test1',
      a2: 'test2',
      a3: false,
      obj: {
        'test1': true
      },
      list: ['a', 'b', 'c', 'd']
    }
  },
  computed: {
    b: function() {
      return this.money - this.a
    }
  }
}
</script>

<style scoped>

</style>