
import Login from './components/Login.vue';
import Dashboard from './components/dashboard/Dashboard.vue';
import DashboardHome from './components/dashboard/dashboard-home/Home.vue';
import DashboardDevices from './components/dashboard/dashboard-devices/Dispositivos';
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
                name:"dash_home",
                path: "",
                component: DashboardHome
            },
            {
                name:"devices",
                path: "devices",
                component: DashboardDevices
            },
            {
                name: "configuration",
                path: "configuration",
                component: DashboardConfiguration
            }
        ]
    }]