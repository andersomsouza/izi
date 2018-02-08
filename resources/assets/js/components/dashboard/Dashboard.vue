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
    import APIHelper from './../../domain/Helpers/APIHelper'
    import Sidebar from '../shared/Sidebar';
    import LoginController from "../../domain/Controllers/LoginController";

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
        }

    }
</script>

<style scoped="">
   .padding-view {
        padding-left: 300px;
    }
</style>