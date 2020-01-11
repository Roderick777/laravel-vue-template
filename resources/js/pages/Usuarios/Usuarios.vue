<template lang="pug">
    div.pa-5
        uk-badge usuarios
        div( v-if="usuarios != null" )
            li( v-for="(usuario, index) in usuarios", :key="'usuario'+ index" ) {{ usuario.name }}
        Crear
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
import store from '../../store/UsuarioStore.js'
import Crear from './Crear.vue';

export default {
    store,
    components: {
        Crear
    },
    computed: {
        ...mapState(['usuarios'])
    },
    methods: {
        ...mapActions(['getUsuarios']),   
        ...mapActions(['setUsuarios']),    
    },
    created() {
        this.getUsuarios().then(() => {
            console.log('yeah')
        })
    }
}
</script>