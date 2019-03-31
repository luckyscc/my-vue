<template lang="html">
    <div class="events">
        <button type="button" name="button" @click="msg('s', $event)">test</button>
        div
    </div>
</template>

<script>
export default {
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        msg: function(a, b) {
            window.console.log(Math.random(), a, b)
        }
    }
}
</script>
<style>

</style>
