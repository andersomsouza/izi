<template>
    <div>
        <h1>IZI</h1>
        <router-view v-if="carregado"></router-view>

    </div>
</template>

<script>
    import Login from './Login';
    import APIHelper from "../domain/Helpers/APIHelper";

    export default {
        data(){
            return {
                carregado : false
            }
        },
        components: {
            'login': Login
        },
       created() {
            let apiHelper = new APIHelper();
            apiHelper._get("/login")
                .then((r) => r.json())
                .then(json => {
                        if (!json.error) {
                            this.$root.login = json;
                            this.$router.push("/dash")
                        }else{
                            this.$router.push("/login")
                        }
                        this.carregado = true;
                    }
                )
                .catch(()=>{
                    this.$router.push("/login")
                    this.carregado = true}
                    )
        }
    }
</script>
