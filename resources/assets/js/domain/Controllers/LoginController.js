import APIHelper from "../Helpers/APIHelper";

export default class LoginController {

    constructor(){
        this.__apiHelper = new APIHelper();
    }

    isLogado(){
        return new Promise((ok,err)=> {
            this.__apiHelper._get("/login")
                .then(res => res.json())
                .then(json => {
                        if (json.error) {
                           err(json.error);
                        } else {
                            ok();
                        }
                    }
                );
        });
    }

    login(form){
        return new Promise((ok,err)=> {
            this.__apiHelper._post("/login",{body:form})
                .then(res => res.json())
                .then(json => {
                        if (json.error) {
                            err(json.error);
                        } else {
                            ok();
                        }
                    }
                );
        });
    }


}