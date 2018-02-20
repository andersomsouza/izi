<template>
    <div :id="dispositivo.name" class="col s12 tab-slide">


        <div class="fixed-action-btn  toolbar">
            <a class="btn-floating btn-large red">
                <i class="material-icons">menu</i>
            </a>
            <ul style="padding-left: 300px;color: white !important;">
                <li><a class="waves-effect waves-light red" onclick="$('#modal1').modal('open')">Adicionar dado</a></li>
                <li><a class="waves-effect waves-light yellow darken-1" @click.prevent="removerDispositivo()">Remover Dispositivo</a>
                </li>
            </ul>
        </div>

        <table>
            <thead>
            <tr>
                <th>Identificador</th>
                <th>Etiqueta</th>
                <th>Tipo</th>
                <th>Tópico</th>
            </tr>
            </thead>

            <tbody>
            <tr v-for="dado of dispositivo.devicedata">
                <td>{{dado.id}}</td>
                <td>{{dado.label}}</td>
                <td>{{dado.type}}</td>
                <td>{{dado.topic}}</td>
            </tr>

            </tbody>
        </table>
    </div>


</template>

<script>

    import APIHelper from "../../../domain/Helpers/APIHelper";

    let $apiHelper = new APIHelper();
    export default {
        name: "tab-dados-dispositivos",
        props: ['dispositivo'],
        mounted() {
            $('ul.tabs').tabs();
            $('select').material_select();
            $('.collapsible').collapsible();

        },
        methods: {
            removerDispositivo() {
                $apiHelper._delete(`/api/v1/devices/${this.dispositivo.id}`)
                    .then(r => r.json())
                    .then(r => {
                        if (!r.error){
                            this.$root.dispositivos = r;
                            this.$parent.dispositivos = r;
                        }
                    })
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