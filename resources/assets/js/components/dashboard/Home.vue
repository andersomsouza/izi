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
            <div class="row">
                <div class="col s12">
                    <ul class="tabs" style="margin-top:2rem">
                        <li class="tab col s2"><a class="" href="#test1">Dispo 1</a></li>
                        <li class="tab col s2"><a class="" href="#test1">Dispo 2</a></li>
                        <li class="tab col s2"><a class="" href="#test1">Dispo 3</a></li>
                        <li class="tab col s2"><a class="" href="#test1">Dispo 4</a></li>
                        <li class="tab col s2"><a class="" href="#test1">Dispo 5</a></li>
                        <li class="tab col s2"><a class="" href="#test1">Dispo 6</a></li>
                    </ul>
                </div>
                <div id="test-swipe-1" class="col s12 tab-slide">
                    <div class="row">
                        <div class="col s12">
                            <div style="border:2px solid #4e8180; height:12rem;margin-top:40px">
                                <h2 style="margin:2rem 0 2rem 0">Atributos do Dispositivo</h2>
                                <form class="col s12">
                                    <div class="row" style="margin-bottom:0px">
                                        <div class="input-field col s6">
                                            <input placeholder="Tipo" id="tipo" type="text" class="validate">
                                            <label class="active" for="tipo" style="text-transform:uppercase">Identificador
                                                do Dispositivo</label>
                                        </div>
                                        <div class="input-field col s6">
                                            <input placeholder="Topico" id="topico" type="text" class="validate">
                                            <label class="active" for="topico" style="text-transform:uppercase">Identificador
                                                do Dispositivo</label>
                                        </div>
                                        <a class="btn-floating btn-medium"
                                           style="position: relative;margin-left:45rem;margin-top:-10px;width:50px; height:50px">
                                            <i class="large material-icons" style="font-size: 2rem;line-height: 50px;">add</i>
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <table>
                        <thead>
                        <tr>
                            <th>Identificador</th>
                            <th>Tipo</th>
                            <th>Tópico</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td>Alvin</td>
                            <td>Eclair</td>
                            <td>$0.87</td>
                        </tr>
                        <tr>
                            <td>Alvin</td>
                            <td>Eclair</td>
                            <td>$0.87</td>
                        </tr>
                        <tr>
                            <td>Alvin</td>
                            <td>Eclair</td>
                            <td>$0.87</td>
                        </tr>
                        <tr>
                            <td>Alvin</td>
                            <td>Eclair</td>
                            <td>$0.87</td>
                        </tr>
                        <tr>
                            <td>Alvin</td>
                            <td>Eclair</td>
                            <td>$0.87</td>
                        </tr>
                        <tr>
                            <td>Alvin</td>
                            <td>Eclair</td>
                            <td>$0.87</td>
                        </tr>

                        <tr>
                            <td>Alan</td>
                            <td>Jellybean</td>
                            <td>$3.76</td>
                        </tr>
                        <tr>
                            <td>Jonathan</td>
                            <td>Lollipop</td>
                            <td>$7.00</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "home",
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