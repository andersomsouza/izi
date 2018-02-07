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

    body {
        padding-left: 300px;
    }

    @media only screen and (max-width: 992px) {
        body {
            padding-left: 0;
        }
    }

    h1 {
        display: block;
        margin-top: 1.5rem;
        text-align: center;
        font-weight: normal;
        font-size: 35px;
        line-height: 1em;
        color: #29b7b2;
        text-transform: uppercase;
    }

    h2 {
        display: block;
        font-weight: normal;
        font-size: 15px;
        line-height: 1em;
        color: #29b7b2;
        text-transform: uppercase;
        margin: 10px 100px 0 0;
    }

    a {
        color: #4e8180 !important;
    }
</style>
