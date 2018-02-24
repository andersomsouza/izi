<template>
    <div :id="dispositivo.name" class="col s12 tab-slide">


        <div class="fixed-action-btn  toolbar">
            <a class="btn-floating btn-large red">
                <i class="material-icons">menu</i>
            </a>
            <ul style="padding-left: 300px;color: white !important;">
                <li><a class="waves-effect waves-light red" @click="adicionarDado()">Adicionar dado</a></li>
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
                <td>{{dado.label}} <div  @click.prevent="removerDado(dado)" class=" bolinha red white-text">
                    <i class="material-icons">close</i>
                </div>
                </td>
                <td>{{dado.type}}</td>
                <td>{{dado.topic}}</td>
            </tr>

            </tbody>
        </table>
    </div>


</template>

<script>

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
                this.$root.shared.apiHelper._delete(`/api/v1/devices/${this.dispositivo.id}`)
                    .then(r => r.json())
                    .then(r => {
                        this.$root.shared.bus.$emit('atualizar-dispositivos', r)
                    })
            },
            adicionarDado() {
                console.log(this.dispositivo);
                this.$root.shared.bus.$emit('dispositivo-selecionado', this.dispositivo);
                $('#modal1').modal('open');

            },
            removerDado(dado){
                this.$root.shared.apiHelper._delete(`/api/v1/devices/${this.dispositivo.id}/data/${dado.id}`)
                    .then(r => r.json())
                    .then(r => {
                        this.$root.shared.bus.$emit('atualizar-dispositivos', r)
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
    .bolinha{
        line-height: 0;
        display: inline-block;
        border-radius: 50%;
        cursor: pointer;
    }
</style>