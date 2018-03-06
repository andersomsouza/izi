<template>
    <div style="position: relative" @click="menuPublicar = !menuPublicar">
        <div v-show="menuPublicar" @click.prevent="$event.stopPropagation()">
            <div class="" style=";position: absolute;
    background-color: rgba(200, 200, 200,0.9);
    display: flex;
    z-index: 999;">
                <div href="#" style="border-radius: 50%; background-color: rgba(255,0,0,0.8);position: absolute;right:0; color: white" @click.prevent="menuPublicar=false">X</div>

                <fieldset>
                    <legend>Publique valor:</legend>
                    <div style="display: flex">
                        <input type="text"  @keyup.enter="publicar()" style="flex-grow: 1; margin: 0 10px" v-model="valorPublicar">
                        <a style="align-self: center;" class="btn" @click.prevent="publicar()"><i class="material-icons">send</i></a>

                    </div>

                </fieldset>
            </div>
        </div>
        <div :id="chartName()" class="chart-int ct-chart ct-major-seventh"></div>
    </div>
</template>

<script>
    import Chartist from 'chartist';
    export default {
        props:['dispositivo'],
        name: "dispositivo-view-float",
        data(){
            return {
                menuPublicar: false,
                valorPublicar:""
            }
        },
        mounted(){
            this.x_chart = 0;
            this.topico = this.$parent.$parent.topico; //pega topico mqtt que o DispositivoView gera
            this.grafico = Chartist.Line('#' + this.chartName(), {
                series: [[]],
                //  labels:[]
            }, {
                showPoint: false,
                axisX:{
                    type: Chartist.AutoScaleAxis,

                }


            })
            this.$root.shared.bus.$emit('subscribe-mqtt', this.topico)
            this.$root.shared.bus.$on(this.topico,
                (valor) => {
                    this.grafico.data.series[0].push({y: valor, x: this.x_chart++});
                    this.grafico.update();
                })
        },
        methods: {
            chartName() {
                return `${this.dispositivo.topic}${this.dispositivo.id}-chart`;
            },
            publicar(){
                this.$root.shared.bus.$emit('publish-mqtt',this.topico,this.valorPublicar);
                Materialize.toast(`Enviado ${this.valorPublicar} para ${this.topico}`, 4000);
                this.valorPublicar = "";
            }
        }

    }
</script>

<style>
    .chart-int .ct-series-a .ct-line,
    .chart-int .ct-series-a .ct-point {
        stroke: blue;
    }
</style>