<template lang="pug">
  div 
    input( type="text", placeholder="Nombre", v-model="nombre" )
    input( type="text", placeholder="Correo", v-model="correo" )
    input( type="password", placeholder="Password", v-model="password" )
    uk-accordion
        uk-accordion-element( titulo="hola" ) 111 11 1 1111111 111 111
        uk-accordion-element( titulo="hola 2" ) 222222 2 22 2222 2 222
        uk-accordion-element( titulo="hola 3" ) 3333 33 3 33333333 3 3333

</template>

<script>
export default {
    data() {
        return {
            nombre      : '',
            correo      : '',
            password    : '',
        }
    },

    methods: {
        async crear() {
            try {
                let datos = { nombre, correo, password };
                let response = await axios.post('/api/user', datos);
            } catch (e) {
                console.log(e)    
            }
            
        }
    }
}
</script>

<style>

</style>