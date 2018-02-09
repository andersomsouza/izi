<template>
    <div>
        <div class="row">
            <izi-disp-view  v-for="testi in testes" :nome="testi"></izi-disp-view>
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
            return{
                testes: ["ander","migo","seu","loco"]
            }
        }
    }
</script>

<style scoped>


</style>