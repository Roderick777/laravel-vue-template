<template>
        <div 
            :class="claseCss" :style="estilo">
            <slot></slot>
        </div>
</template>

<script>
export default {
    props: {
        padding: {
            type : String,
            default : null
        }
    },

    computed: {
        claseCss(){
            if (this.padding == null) {
                return 'radius-4 uk-card uk-card-default uk-card-body'
            } else {
                return 'radius-4 uk-card uk-card-default';
            }
        },

        estilo(){
            if (this.padding != null) {
                return 'padding: ' + this.padding + '';
            } else {
                return '';
            }
        }

    }

}
</script>
<style scoped>
    
</style>