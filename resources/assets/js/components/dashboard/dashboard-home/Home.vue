<template>
    <div>
        <div class="row">
            <izi-disp-view  v-for="dev in devices" :key="dev.id" :dispositivo="dev"></izi-disp-view>
        </div>
    </div>

</template>

<script>
    import DispositivoView from './DispositivoView.vue'
    export default {
        name: "home",
        components:{
            'izi-disp-view': DispositivoView
        },
        data(){
            return {
                dispositivos:[]
            }
        },
        computed:{
            devices(){
                let dispositivosData=[];

                this.dispositivos.forEach((dispositivo)=>{
                    console.log(dispositivo.devicedata)
                    dispositivosData = dispositivosData.concat(dispositivo.devicedata);
                });

                return dispositivosData;
            }
        },
        created(){
            this.$root.shared.bus.$on('atualizar-dispositivos',(dispositivos) =>{
                this.dispositivos = dispositivos;
            });
            if (!this.$root.dispositivos) this.$root.shared.apiHelper._get('/api/v1/devices')
                .then((r) => r.json())
                .then(json =>
                {this.$root.shared.bus.$emit('atualizar-dispositivos', json) });
            else
                this.dispositivos = this.$root.dispositivos ;

        }


    }
</script>

<style scoped>


</style>