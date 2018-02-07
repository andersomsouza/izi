export default class APIHelper {
    constructor() {
        this.updateConfiguration();
    }

    updateConfiguration() {
        this.defaultConfiguration = this.__getConfiguration();
    }

//isolei aqui para atualizar o csrf
    __getConfiguration() {
        return {
            credentials: 'same-origin',
            headers: {
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
            }
        }
    }

    __fetch(path, ...userConfig) {
        let config;
        if (userConfig) {
            config = {};
            Object.assign(config, ...userConfig, this.defaultConfiguration);
        } else {
            config = this.defaultConfiguration;
        }
        return fetch(path, config);

    }

    _get(path, userConfig) {

        return this.__fetch(path, {method: "GET"}, userConfig);
    }

    _post(path, userConfig) {
        return this.__fetch(path, {method: "POST"}, userConfig);
    }

    _delete(path) {
        return this.__fetch(path, {method: "DELETE"});
    }


}