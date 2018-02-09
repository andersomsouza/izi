<template>

    <div class="row">
        <div class="col s12">
            <ul class="tabs" style="margin-top:2rem">
                <li class="tab col s2" v-for="dispositivo in dispositivos" v-bind:key="dispositivo.id"><a class=""
                                                                                                          :href="dispositivoUrl(dispositivo.name)">{{dispositivo.name}}</a>
                </li>
            </ul>
        </div>
        <izi-tab-dispositivos v-for="dispositivo in dispositivos" :dispositivo="dispositivo"
                              v-bind:key="dispositivo.id"></izi-tab-dispositivos>
    </div>


</template>

<script>
    import APIHelper from "../../../domain/Helpers/APIHelper";
    import TabDadosDispositivos from './TabDadosDispositivos.vue';

    let $apiHelper = new APIHelper();

    export default {
        name: "dispositivos",
        data() {
            return {
                dispositivos: []
            }
        },
        created() {
            if (!this.$root.dispositivos) $apiHelper._get('/api/v1/devices')
                .then((r) => r.json())
                .then(json => this.dispositivos = json)
            this.dispositivos = this.$root.dispositivos;
        },
        components: {'izi-tab-dispositivos': TabDadosDispositivos},
        mounted() {
            $('ul.tabs').tabs()
        },
        methods: {
            dispositivoUrl(id) {
                return "#" + id;
            }
        }
    }
</script>

<style scoped>
    .box-primary-create {
        height: 10rem;
        margin-top: 70px;
        padding: 40px 0px 0px 30px;
        border: 3px solid #4e8180;
    }

    .tabs .tab a:hover, .tabs .tab a.active {
        background-color: transparent;
        color: #4e8180;
    }

    .tabs .indicator {
        background-color: #4e8180;
    }

    .tab-slide {
        height: 40vh;
        margin-top: 15px;
    }
</style>