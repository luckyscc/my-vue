<template lang="html">
    <div class="com">
        <slot name="a"></slot>
        conponents
        {{name}} {{age2}}
        <button type="button" name="button" @click="$emit('patch1', 34)">发送到父组件</button>
        <slot></slot>
        <slot name="b"></slot>
    </div>
</template>

<script>
export default {
    props: ['age2'],
    data() {
        return {
            name: 'com'
        }
    }
}
</script>

<style lang="css">
    
</style>