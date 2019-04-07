import Vue from 'vue'

/**
 * 乘方指令
 */
Vue.directive('n', {
    bind: function(el, binding) {
        el.textContent = Math.pow(binding.value, 2)
    },
    update: function(el, binding) {
        el.textContent = Math.pow(binding.value, 2)
    }
})