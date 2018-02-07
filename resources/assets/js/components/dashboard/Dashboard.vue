<template>
    <div v-if="carregado">
        <h1>Dashboard</h1>

        <router-view>

        </router-view>
    </div>
</template>

<script>
    import APIHelper from './../../domain/Helpers/APIHelper'

    export default {
        name: "dashboard",
        data() {
            return {
                carregado: false
            }
        },
        created() {
            console.log("dash criada")
            let apiHelper = new APIHelper();
            if (!this.$root.login)
                apiHelper._get("/login")
                    .then((r) => r.json())
                    .then(json => {
                            if (!json.error) {
                                this.$root.login = json;
                            } else {
                                this.$router.push("/login")
                            }
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

<style scoped>

</style>