const options={
    data(){
        return {
            appName : 'VueApp',
            message: '' ,
            agree: false

        }
    }
}

const app= Vue.createApp(options);
const vm= app.mount('#app');
