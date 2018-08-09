import Home from './components/home/Home.vue';

import Cadastro from './components/cadastro/Cadastro.vue';

const routes = [
  { path: '', component: Home, titulo: 'Home' },
  { path: '/cadastro', component: Cadastro, titulo: 'Cadastro' },
];

export default routes;
