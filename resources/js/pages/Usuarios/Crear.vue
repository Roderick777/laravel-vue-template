<template lang="pug">
  div  
    form
        fieldset.uk-fieldset
            div.uk-margin
                input.uk-input( type="text", placeholder="Nombre", v-model="nombre" )
            div.uk-margin
                input.uk-input( type="text", placeholder="Correo", v-model="correo" )
            div.uk-margin
                input.uk-input( type="password", placeholder="Password", v-model="password" )
            button.uk-button.uk-button-primary( @click="crear()" ) Guardar
    //- uk-accordion
    //-     uk-accordion-element( titulo="hola" ) 111 11 1 1111111 111 111
    //-     uk-accordion-element( titulo="hola 2" ) 222222 2 22 2222 2 222
    //-     uk-accordion-element( titulo="hola 3" ) 3333 33 3 33333333 3 3333

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
                let datos = {   
                    nombre      : this.nombre, 
                    correo      : this.correo, 
                    password    : this.password 
                };
                let response = await axios.post('/api/user', datos);
            } catch (e) {
                console.log(e)    
            }
        }
    }
}
</script>
<style scoped>
    .uk-input {
        border-top-width: 0px;
        border-left-width: 0px;
        border-right-width: 0px;
    }
</style>