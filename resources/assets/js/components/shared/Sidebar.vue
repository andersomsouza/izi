<template>
    <div>
        <ul id="slide-out" class="side-nav fixed" style="height:100vh">
            <li>
                <div class="user-view center no-marg-bot" style="background-color:#263238; margin-bottom:0px">
                    <div class="background">
                    </div>
                    <a href="#!user"><img src="images/gear.png"></a>
                    <a href="#!name"><span class="white-text name">Andersom Souza</span></a>
                    <a href="#!email"><span class="white-text email">Ander@gmail.com</span></a>
                </div>
            </li>
            <li class="waves-effect"><a href="#!"><i class="material-icons" style="color:#C856D4">home</i>Home</a></li>
            <li>
                <div class="divider"></div>
            </li>
            <li class="waves-effect"><a href="#!"><i class="material-icons" style="color:#729AD0">bug_report</i>Dispositivos</a>
            </li>
            <li>
                <div class="divider"></div>
            </li>
            <li class="waves-effect"><a href="#!"><i class="material-icons" style="color:#98CEA2">device_hub</i>Gatilhos</a>
            </li>
            <li>
                <div class="divider"></div>
            </li>
            <li class="waves-effect"><a href="#!"><i class="material-icons" style="color:#E6CC38">build</i>Configurações</a>
            </li>
            <li><a class="side-footer waves-effect"></a></li>

        </ul>

    </div>
</template>

<script>
    export default {
        name: "sidebar"
    }
</script>

<style scoped>
    .side-nav li>a {
        margin: 1rem 0 1rem 0;
        color: rgba(0,0,0,0.87);
        display: block;
        font-size: 14px;
        font-weight: 500;
        height: 48px;
        line-height: 48px;
        padding: 0 32px;
    }

    .side-nav{
        overflow: hidden;
    }

    .side-nav:hover{
        overflow: auto;
    }
    .side-footer{
        margin: 0px !important;
        background-color: #263238;
        position: fixed;
        bottom: 0px;
        margin-right: auto !important;
        margin-left: auto !important;
        width: 100%;
        padding: 0px !important;
        cursor: inherit;
    }
    .side-footer:hover{
        background-color: #263238 !important;
    }


    .side-nav li>a:hover {
        background-color: transparent;
    }
    .side-nav .divider {
        margin: 0;
    }
    .side-nav li{
        width: 100%;
    }
    .side-nav li:hover {
        background-color: rgba(0,0,0,0.05);
    }

</style>