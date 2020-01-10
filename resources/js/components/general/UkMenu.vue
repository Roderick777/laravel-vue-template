<template>
    <div id="menu-principal" uk-offcanvas="overlay: true">
        <div class="uk-offcanvas-bar">
            <ul class="uk-nav uk-nav-default">
                <li class="uk-parent">
                    <router-link uk-toggle="target: #menu-principal" to="/app/">Inicio</router-link>
                </li>
                <li class="uk-parent">
                    <router-link uk-toggle="target: #menu-principal" to="/app/usuarios">Usuarios</router-link>
                </li>
                <li class="uk-parent">
                    <router-link uk-toggle="target: #menu-principal" to="/app/ajustes">Ajustes</router-link>
                </li>
                <!-- <li class="uk-active"><a href="#">Active</a></li> -->
                <!-- <li class="uk-parent">
                    <a href="/app/usuarios">Usuarios</a>
                    <ul class="uk-nav-sub">
                        <li><a href="#">Sub item</a></li>
                        <li><a href="#">Sub item</a></li>
                    </ul>
                </li> -->
                <!-- <li class="uk-nav-header">Header</li>
                <li><a href="#"><span class="uk-margin-small-right" uk-icon="icon: table"></span> Item</a></li>
                <li><a href="#"><span class="uk-margin-small-right" uk-icon="icon: thumbnails"></span> Item</a></li>
                <li class="uk-nav-divider"></li>
                <li><a href="#"><span class="uk-margin-small-right" uk-icon="icon: trash"></span> Item</a></li> -->
            </ul>
        </div>
    </div>
</template>

<script>
    export default { }
</script>

<style scoped>
    .uk-offcanvas-bar{
        background: #FFF !important;
    }

    .uk-nav-default>li>a, .uk-nav-default .uk-nav-sub a, .uk-nav-default .uk-nav-sub a, .uk-nav-header {
        color: #222 !important;
    }

</style>