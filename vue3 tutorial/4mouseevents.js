const options = {
    data() {
        return {
            appName: 'VueApp',
            x: 0,
            y: 0

        }
    },
    methods: {
        // e is event object , type is one of the keys presents in object, we can also pass custom arguments here in templates
        handleEvents(e, data) {
            console.log(e,e.type)
            if (data){
                    console.log(data)
            }
        },
        mouseOverEvent(e){
            this.x= e.offsetX
            this.y= e.offsetY
        }
    }
}


const app = Vue.createApp(options);
const vm = app.mount('#app');
