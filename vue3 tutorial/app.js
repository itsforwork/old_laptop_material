//root component's options
// PTR: we can access these data in console by: vm.$data.counter
const options= {
    data(){
        return{
            appName : 'VueApp',
            id: 'h13',
            text: 'some id , see in instance',
            cr: 'cross',
            attr: 'class',
            dynamicHtml: '<h1>this is dynamic html<h1>',
            counter: 1
        }
    },
    // PTR: we can access these methods in console by: vm.increment()
    methods:{
        increment(){
            this.counter++;
        },
        showDate(){
            const date = new Date();
            return date.toUTCString();
        }
    }
}
//application instance
const app= Vue.createApp(options);
// vm: view model instance of components
const vm= app.mount('#app'); 