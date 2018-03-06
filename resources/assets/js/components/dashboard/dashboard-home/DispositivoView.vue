<template>

    <div class="col s12 m4">
        <div class="card blue-grey lighten-4">
            <div class="card-content ">
                <span class="card-title texto-sem-overflow">{{dispositivo.label}} <sup>{{dispositivo.topic}}</sup></span>

                <div class="ultimo-valor">
                    <p><i>{{ultimoValor}}</i></p>
                    <p><i>{{ultimaPublicacao}}</i></p>

                </div>
                <dispositivo-view-wrapper :dispositivo="dispositivo"></dispositivo-view-wrapper>

                <a class="btn-floating halfway-fab waves-effect waves-light teal"><i
                        class="material-icons">show_chart</i></a>
            </div>
        </div>

    </div>

</template>

<script>

    import Moment from 'moment';
    import DispositivoViewWrapper from "./dispositivos-view-types/DispositivoViewWrapper";

    export default {
        components: {"dispositivo-view-wrapper": DispositivoViewWrapper},
        name: "dispositivo-view",
        props: ['dispositivo'],
        data() {
            return {
                ultimoValor: 'Offline',
                lastUpdate: null,

            }
        },
        created() {
            Moment.locale('pt-br');
            this.topico = `/${this.dispositivo.devicename}/${this.dispositivo.topic}`;
        },
        computed: {
            ultimaPublicacao() {
                if (this.lastUpdate) {
                    return Moment().startOf(this.lastUpdate).fromNow();
                } else {
                    return 'Offline';
                }

            }
        },
        mounted() {
            this.$root.shared.bus.$emit('subscribe-mqtt', this.topico)
            this.$root.shared.bus.$on(this.topico,
                (valor) => {
                if(isNaN(valor)){
                    this.ultimoValor = valor.toString();
                }else{
                    this.ultimoValor = parseFloat(valor.toString());
                }
                    this.lastUpdate = Date.now();
                })
        }
    }
</script>

<style scoped>
    .texto-sem-overflow {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }

    .ultimo-valor {
        margin-bottom: 16px;
        display: block;
    }

</style>