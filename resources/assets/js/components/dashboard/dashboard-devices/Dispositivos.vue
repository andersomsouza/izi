<template>
    <div style="height:90vh" class="col s12">
        <div class="row center" style="margin-bottom:0px">
            <div class="row">
                <h1>Adicionar Dispositivos</h1>
                <div class="divider" style="width:30%;margin-left:35%; height:2px ;background-color:#29b7b2"></div>
            </div>
            <div class="col offset-s3 s6"
                 style="height:7rem; margin-top:10px;padding: 17px 0px 0px 50px; border:3px solid #29b7b2">
                <div class="row">
                    <form class="col s12">
                        <div class="row">
                            <div class="input-field col s8">
                                <input placeholder="ID" id="first_name" type="text" class="validate">
                                <label class="active" for="first_name" style="text-transform:uppercase">Identificador do
                                    Dispositivo</label>
                            </div>
                            <a class="btn-floating btn-medium"
                               style="position: relative;margin-left:3rem;margin-top:51px;width:50px; height:50px">
                                <i class="large material-icons" style="font-size: 2rem;line-height: 50px;">add</i>
                            </a>
                        </div>
                    </form>
                </div>
            </div>

            <izi-tab-dispositivos></izi-tab-dispositivos>

        </div>
    </div>
</template>

<script>
    import TabDispositivos from './TabPaneDispositivos.vue';
    export default {
        name: "dispositivos",
        components:{
            "izi-tab-dispositivos": TabDispositivos
        },
        mounted() {
            $('ul.tabs').tabs()
        }
    }
</script>

<style scoped>
    .box-primary-create{
        height:10rem;
        margin-top:70px;
        padding: 40px 0px 0px 30px;
        border:3px solid #4e8180;
    }

    .tabs .tab a:hover, .tabs .tab a.active {
        background-color: transparent;
        color: #4e8180;
    }

    .tabs .indicator {
        background-color: #4e8180;
    }

    .tab-slide{
        height: 40vh;
        margin-top: 15px;
    }
</style>