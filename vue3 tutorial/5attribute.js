const options = {
    data() {
        return {
            appName: 'VueApp',
            isFav: true,
            link: 'www.google.com',
            books: [
                { title: 'book1', img: '1.jpg', author: 'author 1', isFav: true },
                { title: 'book2', img: '2.jpg', author: 'author 2', isFav: false },
                { title: 'book3', img: '3.jpg', author: 'author 3', isFav: true }
            ]
        }
    },
    //to change the class if we toggle on any li, for this we have to parse an object as argument
    methods: {
        changeColor(b) {
            b.isFav = !b.isFav;
        }
    },
    // computed property: it depends on data properties, if data changes, then it will change the data here also
    computed: {
        filteredBooks(){
            return this.books.filter((book) => book.isFav)
        }
    }
}

const app = Vue.createApp(options);
const vm = app.mount('#app');




// use of filter
/// let numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];

// let positive_array = numbers.filter(function(value) {
//     return value >= 0; });

// console.log(positive_array);

// //Output = [0, 1, 5, 12, 19, 20]
