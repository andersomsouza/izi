<template>
    <div class="switch">
        <label>
            Off
            <input @change="mudaSwitch($event)" type="checkbox">
            <span class="lever"></span>
            On
        </label>
    </div>
</template>

<script>
    function __true_test(valor) {
        if (valor == '0') return false;
        if (valor == 'false') return false;
        return true;
    }

    export default {
        name: "dispositivo-view-boolean",
        mounted() {
            this.topico = this.$parent.$parent.topico; //pega topico mqtt que o DispositivoView gera
            this.$root.shared.bus.$emit('subscribe-mqtt', this.topico)
            this.$root.shared.bus.$on(this.topico,
                (valor) => {

                })
        },
        methods: {
            mudaSwitch(event) {
                this.$root.shared.bus.$emit('publish-mqtt', this.topico, event.target.checked.toString());
                Materialize.toast(`${this.topico} - ${event.target.checked?'<strong style="color:green">on</strong>':'<strong style="color:red">off</strong>'}`, 4000);
            }
        }
    }
</script>

<style scoped>

</style>