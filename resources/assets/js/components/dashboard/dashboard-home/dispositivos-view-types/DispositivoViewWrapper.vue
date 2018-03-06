
<script>
    import DispositivoViewFloat from "./DispositivoViewFloat";
    import DispositivoViewInt from "./DispositivoViewInt";
    import DispositivoViewBoolean from "./DispositivoViewBoolean";
    export default {
        name: "dispositivo-view-wrapper",
        props: ["dispositivo"],
        components:{
            'float-view': DispositivoViewFloat,
            'int-view': DispositivoViewInt,
            'boolean-view': DispositivoViewBoolean
        },
        render(h){
            let dispositivo = this.dispositivo;
            return h(`${dispositivo.type}-view`,{props:{dispositivo}})
        }
    }
</script>

<style scoped>

</style>