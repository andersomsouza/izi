<template>
    <div>

        <router-view v-if="carregado"></router-view>

    </div>
</template>

<script>
    import Login from './Login';
    import APIHelper from "../domain/Helpers/APIHelper";
    import LoginController from "../domain/Controllers/LoginController";

    export default {
        data() {
            return {
                carregado: false
            }
        },
        components: {
            'login': Login
        },
        created() {
            let loginController = new LoginController();
            loginController.isLogado("/login")
                .then(json => {
                        this.$root.login = json;
                        this.carregado = true;
                        this.$router.push("/dash")
                    }
                )
                .catch(() => {
                        this.carregado = true
                        this.$router.push("/login")
                    }
                )
        }
    }
</script>
<style>



    @media only screen and (max-width: 992px) {
        body {
            padding-left: 0;
        }
    }



    h1,h2,h3,h4 {

        color: #29b7b2;
        text-transform: uppercase;
    }

</style>
