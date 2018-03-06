<template>
    <div>
        <izi-sidebar>

        </izi-sidebar>
        <div class="padding-view">
            <router-view>

            </router-view>

        </div>
    </div>
</template>

<script>

    import Sidebar from '../shared/Sidebar';
    import LoginController from "../../domain/Controllers/LoginController";
    import MQTT from 'mqtt';

    export default {
        name: "dashboard",
        components: {
            'izi-sidebar': Sidebar
        },
        data() {
            return {
                carregado: false
            }
        },
        created() {
            console.log("dash criada")
            let loginController = new LoginController();
            if (!this.$root.login)
                loginController.isLogado()
                    .then(json => {
                            this.$router.push("/login")
                            this.carregado = true;
                        }
                    )
                    .catch((e) => {
                            this.$router.push("/login")
                            this.carregado = true
                        }
                    )
            else {
                let bus = this.$root.shared.bus;
                var client = MQTT.connect('mqtt://192.168.0.2', {
                    port: 1884,
                    username: "ander",
                    password: "ander123"
                });
                bus.$on('subscribe-mqtt', (topic) => {
                    client.subscribe(topic)
                });
                client.on('connect', function () {
                });
                bus.$on('publish-mqtt',function(topic,message){
                    client.publish(topic,message);
                });
                client.on('message', function (topic, message) {
                    bus.$emit(topic, message);
                    //console.log(topic, message);
                    // client.end()
                })
            }
        }

    }
</script>

<style scoped>
    .padding-view {
        padding-left: 300px;
    }

    @media only screen and (max-width: 992px) {
        .padding-view {
            padding-left: 0;
        }
    }
</style>