const options={
    data(){
        return {
            appName: 'VueApp',
            showName : true ,
            // agar ue true hai to dikheag false hai to nahi dikhega
            users: 6,
            cart: ['apple','banana', 'mango' ]
        }
    },
    methods:{
        increment(){
            this.users++;
        },
        addToCart(){
            this.cart.push('x');
        }
    }
}

const app= Vue.createApp(options);
const vm= app.mount('#app')
