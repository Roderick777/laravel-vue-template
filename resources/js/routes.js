import Home from './pages/Home.vue';
import Ajustes from './pages/Ajustes.vue';
import Usuarios from './pages/Usuarios/Usuarios.vue';

export const routes = [
    { path: '/app/', component: Home, name: 'Home' },
    { path: '/app/ajustes', component: Ajustes, name: 'Ajustes' },
    { path: '/app/usuarios', component: Usuarios, name: 'Usuarios' },


];