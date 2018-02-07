<template>

    <div class="row">
        <div class="col s12">
            <ul class="tabs" style="margin-top:2rem">
                <li class="tab col s2" v-for="dispositivo of dispositivos" v-bind:key="dispositivo.id"><a class=""
                                                                                                          :href="dispositivoUrl(dispositivo.id)">{{dispositivo.id}}</a>
                </li>
            </ul>
        </div>
        <izi-tab-dispositivos v-for="dispositivo of dispositivos" :dispositivo="dispositivo"
                              v-bind:key="dispositivo.id"></izi-tab-dispositivos>
    </div>


</template>

<script>
    let dispositivos = [
        {
            id: "disp1",
            dados:[
                {
                    id: "temperatura",
                    tipo: "float",
                    topico: "temperatura_valor"

                },
                {
                    id: "umidade",
                    tipo: "float",
                    topico: "umid_valor"

                }
            ]
        },
        {
            id: "disp2",
            dados:[
                {
                    id: "quantidade de moedas",
                    tipo: "int",
                    topico: "moedas_qtde"

                },
                {
                    id: "sensor indutivo",
                    tipo: "boolean",
                    topico: "sensor_ativ"

                }
            ]
        }]
    import TabDadosDispositivos from './TabDadosDispositivos.vue';

    export default {
        name: "dispositivos",
        data() {
            return {
                dispositivos
            }
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