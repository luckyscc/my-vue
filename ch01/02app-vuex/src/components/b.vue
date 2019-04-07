<template lang="html">
    <div class="b">
        page b {{$store.state.count.count}}
        <button @click="add(2)">增加</button>
        <button @click="reduce">删减</button>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    methods: mapActions('count', ['add', 'reduce'])
}
</script>
<style>

</style>