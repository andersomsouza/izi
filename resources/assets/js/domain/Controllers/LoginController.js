import APIHelper from "../Helpers/APIHelper";

export default class LoginController {

    constructor() {
        this.__apiHelper = new APIHelper();
    }

    isLogado() {
        return new Promise((ok, err) => {
            this.__apiHelper._get("/login")
                .then(res => res.json())
                .then(json => {
                        if (json.error) {
                            err(json.error);
                        } else {
                            ok(json);
                        }
                    }
                )
                .catch(e => err(e));
        });
    }

    login(form) {
        return new Promise((ok, err) => {
            this.__apiHelper._post("/login", {body: form})
                .then(res => {
                    if (res.status == 410) {
                        res.json().then((json) => document.querySelector('meta[name="csrf-token"]').content = json.novoToken)
                        this.__apiHelper.updateConfiguration();
                        err('Token expirou');
                    } else {
                        return res.json()
                    }
                })
                .then(json => {
                        if (json.error) {
                            err(json.error);
                        } else {
                            ok(json);
                        }
                    }
                )
                .catch(e => {
                    err(e)
                });
        });
    }

    logout() {
        return new Promise((ok, err) => {
            this.__apiHelper._get("/logout")
                .then(res => res.json())
                .then(json => {
                        if (json.error) {
                            err(json.error);
                        } else {
                            res.json().then((json) => document.querySelector('meta[name="csrf-token"]').content = json.novoToken)
                            this.__apiHelper.updateConfiguration();
                            ok(json);
                        }
                    }
                )
                .catch(e => err(e));


        });
    }


}