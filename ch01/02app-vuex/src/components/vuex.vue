<template lang="html">
    <div class="vuex">
        vuex {{$store.state.count }}
        <button type="button" name="button" @click="increment">增加</button>
        <button type="button" name="button" @click="decrement">删减</button>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    methods: mapActions([
        'increment',
        'decrement'
    ])
}
</script>
<style>
    button {
        width: 80px;
        height: 35px;
        color: #fff;
        outline: none;
        border: 0;
        margin-left: 10px;
        border-radius: 3px;
        cursor: pointer;
        font-size: 14px;
        letter-spacing: 2px;
        background-color: #0094ff;
    }
</style>