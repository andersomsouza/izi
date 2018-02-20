<template>
    <div>
        <div class="row">
            <izi-disp-view  v-for="dev in devices" :key="dev.id" :dispositivo="dev"></izi-disp-view>
        </div>
    </div>

</template>

<script>
    import DispositivoView from './DispositivoView.vue'
    import APIHelper from "../../../domain/Helpers/APIHelper";
    let $apiHelper = new APIHelper();
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
            if (!this.$root.dispositivos) $apiHelper._get('/api/v1/devices')
                .then((r) => r.json())
                .then(json =>
                {this.$root.dispositivos = this.dispositivos = json});

        }


    }
</script>

<style scoped>


</style>