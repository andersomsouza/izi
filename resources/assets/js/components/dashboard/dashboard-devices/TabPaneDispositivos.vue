<template>

    <div class="row">
        <div class="col s12">
            <ul class="tabs tabs-fixed-width" style="margin-top:2rem">
                <li class="tab" v-for="dispositivo in dispositivos" v-bind:key="dispositivo.id"><a class=""
                                                                                                   :href="dispositivoUrl(dispositivo.name)">{{dispositivo.name}}</a>
                </li>
            </ul>
        </div>
        <izi-tab-dispositivos v-for="dispositivo in dispositivos" :dispositivo="dispositivo"
                              v-bind:key="dispositivo.id"></izi-tab-dispositivos>
        <div id="modal1" class="modal">
            <div class="modal-content">
                <div>
                    <form action="" class="row">
                        <div class="col s12">
                            <h4>Adicionar Dado / {{dispositivoSelecionado.name}}</h4>
                        </div>

                        <div class="col s12">
                            <form action="" id="formAddDadoDispositivo">
                                <div class="row">
                                    <div class="input-field col s12">
                                        <input placeholder="Etiqueta" id="label" type="text" name="label"
                                               class="validate">
                                        <label class="active" for="label" style="text-transform:uppercase">Etiqueta
                                            do Dado</label>
                                    </div>
                                    <div class="input-field col s6">
                                        <select name="type">
                                            <option value="none" disabled selected>Selecione o tipo</option>
                                            <option value="float">float</option>
                                            <option value="int">int</option>
                                            <option value="boolean">boolean</option>
                                            <option value="string">String</option>
                                        </select>
                                        <label>Tipo</label>
                                    </div>
                                    <div class="input-field col s6">
                                        <input placeholder="Topico" id="topico" name="topic" type="text"
                                               class="validate">
                                        <label class="active" for="topico" style="text-transform:uppercase">Topico
                                            do Dado</label>
                                    </div>

                                </div>
                            </form>
                        </div>


                    </form>
                </div>
            </div>
            <div class="modal-footer">
                <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat"
                   @click.prevent="adicionarDado()">Adicionar</a>
            </div>
        </div>
    </div>


</template>

<script>
    import TabDadosDispositivos from './TabDadosDispositivos.vue';


    export default {
        name: "dispositivos",
        data() {
            return {
                dispositivos: [],
                dispositivoSelecionado: {}
            }
        },
        created() {
            if (!this.$root.dispositivos) this.$root.shared.apiHelper._get('/api/v1/devices')
                .then((r) => r.json())
                .then(json => {
                    this.$root.shared.bus.$emit('atualizar-dispositivos', json)
                });

            this.dispositivos = this.$root.dispositivos;
            this.$root.shared.bus.$on('atualizar-dispositivos', (dispositivos) => {
                if (!dispositivos.error) this.dispositivos = dispositivos;
            })
            this.$root.shared.bus.$on('dispositivo-selecionado', (dispositivo) => {
                this.dispositivoSelecionado = dispositivo
            });

        },
        components: {'izi-tab-dispositivos': TabDadosDispositivos},
        mounted() {
            $('.modal').modal();
            $('ul.tabs').tabs();
        },
        methods: {
            dispositivoUrl(id) {
                return "#" + id;
            },
            adicionarDado() {
                let id = this.dispositivoSelecionado.id;
                let formData = new FormData(document.querySelector("#formAddDadoDispositivo"));
                this.$root.shared.apiHelper._post(`/api/v1/devices/${id}/data`, {body: formData})
                    .then(r => r.json())
                    .then(json => {
                        if (!json.error) {
                            this.$root.shared.bus.$emit('atualizar-dispositivos', json);
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