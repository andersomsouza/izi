
import Login from './components/Login.vue';
import Dashboard from './components/dashboard/Dashboard.vue';
import DashboardHome from './components/dashboard/Home';
import DashboardDevices from './components/dashboard/Dispositivos';
import DashboardConfiguration from './components/dashboard/Configuracoes';

export default [
    {
        path: '/login',
        component:Login
    },{
        path: '/dash',
        component:Dashboard,
        children:[
            {
                path: "",
                component: DashboardHome
            },
            {
                path: "devices",
                component: DashboardDevices
            },
            {
                path: "configuration",
                component: DashboardConfiguration
            }
        ]
    }]