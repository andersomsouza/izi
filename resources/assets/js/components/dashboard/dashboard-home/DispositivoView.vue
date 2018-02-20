<template>
    <div class="col s12 m4">
        <div class="card blue-grey lighten-4">
            <div class="card-content ">
                <span class="card-title texto-sem-overflow">{{dispositivo.label}} / {{dispositivo.topic}}</span>
                <div>
                    <span>Valor</span> <span>23.5</span>
                </div>
                <div :id="chartName()" class="ct-chart ct-major-seventh"></div>
                <a class="btn-floating halfway-fab waves-effect waves-light teal"><i
                        class="material-icons">show_chart</i></a>
            </div>
        </div>
    </div>
</template>

<script>
    import Chartist from 'chartist';

    export default {
        name: "dispositivo-view",
        props:['dispositivo'],
        data() {
            return {
                grafico: {}
            }
        },
        mounted() {
            this.grafico = Chartist.Line('#' + this.chartName(), {
                    // A labels array that can contain any sort of values
                    // Our series array that contains series objects or in this case series data arrays
                    series: [
                        [5, 2, 4, 2, 0]
                    ]
                }
            )

            setInterval(()=>{
                this.grafico.data.series[0].push(Math.random()*10);

                this.grafico.update();
            },1000)
        },
        methods: {
            chartName() {
                return this.dispositivo.topic +this.dispositivo.id+ '-chart';
            }
        }
    }
</script>

<style scoped>
.texto-sem-overflow{
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}

</style>