<template>
<div id="login-page">
    <div  class="row form-wrapper">
        <div class="col s12 push-m3 push-l4 m6 l4 card-panel">
            <form @click.prevent="login()" >
                <div class="row">
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <i class="material-icons prefix">mail_outline</i>
                        <input name="email" class="validate" id="email" type="email">
                        <label for="email" data-error="wrong" data-success="right">Email</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <i class="material-icons prefix">lock_outline</i>
                        <input name="password" id="password" type="password">
                        <label for="password">Senha</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12 m12 l12  login-text">
                        <input name="remember-me" type="checkbox" id="remember-me" />
                        <label for="remember-me">Lembrar me</label>
                    </div>
                </div>
                <div class="row">
                    <div class=" col s12">
                       <p v-show="error">{{ error }}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="submit"  value="Login" class="btn waves-effect waves-light col s12" >
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s6 m6 l6">
                        <p class="margin medium-small"><a href="#">Cadastre-se!</a></p>
                    </div>
                    <div class="input-field col s6 m6 l6">
                        <p class="margin right-align medium-small"><a href="#">Esqueceu a senha?</a></p>
                    </div>
                </div>

            </form>
        </div>
    </div>

</div>


</template>

<script>
    import LoginController from "../domain/Controllers/LoginController";

    let loginConroller = new LoginController();
    export default {
        name: "login",
        data(){
            return {'error':''}
        },
        created(){

            if(this.$root.login){
                if(this.$root.login.email)
                this.$router.push({name: 'dash_home'});
            }
        } ,
        methods:{
            login(){
                let formData = new FormData(document.querySelector('form'));
                loginConroller.login(formData)
                    .then((json)=>{
                        console.log(json);

                        console.log("chegou aq");
                        this.$root.login = json;
                        this.$router.push({name: 'dash_home'});

                    })
                    .catch(e=>this.error = e);
            }
        }
    }
</script>

<style scoped>
 #login-page{
     height: 100vh;
 }
    .form-wrapper{
        position: relative;
        top: 50%;
        transform: translateY(-50%);

    }
</style>