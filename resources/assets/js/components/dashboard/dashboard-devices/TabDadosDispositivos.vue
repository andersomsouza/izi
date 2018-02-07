<template>
    <div :id="dispositivo.id" class="col s12 tab-slide">
        <div class="row">
            <div class="col s12">
                <div style="border:2px solid #4e8180; height:12rem;margin-top:40px">
                    <h2 style="margin:2rem 0 2rem 0">Adicionar nova variavel</h2>
                    <form class="col s12">
                        <div class="row" style="margin-bottom:0px">
                            <div class="input-field col s6">
                                <select>
                                    <option value="" disabled selected>Selecione o tipo</option>
                                    <option value="1">float</option>
                                    <option value="2">int</option>
                                    <option value="3">boolean</option>
                                    <option value="3">String</option>
                                </select>
                                <label>Tipo</label>
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
            <tr v-for="dado of dispositivo.dados">
                <td>{{dado.id}}</td>
                <td>{{dado.tipo}}</td>
                <td>{{dado.topico}}</td>
            </tr>

            </tbody>
        </table>
    </div>


</template>

<script>

    export default {
        name: "tab-dados-dispositivos",
        props: ['dispositivo'],
        mounted() {
            $('ul.tabs').tabs();
            $('select').material_select();

        }
    }
</script>

<style scoped>
    .box-primary-create {
        height: 10rem;
        margin-top: 70px;
        padding: 40px 0px 0px 30px;
        border: 3px solid #4e8180;
    }

    .tabs .tab a:hover, .tabs .tab a.active {
        background-color: transparent;
        color: #4e8180;
    }

    .tabs .indicator {
        background-color: #4e8180;
    }

    .tab-slide {
        height: 40vh;
        margin-top: 15px;
    }
</style>