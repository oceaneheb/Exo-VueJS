Vue.createApp({

    data() {
        return {
            number: 33,
        };
    },
    
    methods: {
        augmenter() {
            this.number += 1;
            console.log(this.number);
        },
        diminuer() {
            this.number -= 1;
            console.log(this.number);
        }
    },
    
}).mount('#app');

