Vue.createApp({
    data(){
        return {
            word1: "",
            word2: "",
        };        
    },
    methods: {
        
        afficherWord1(event) {
            this.word1 = event.target.value;
            console.log(this.word1);
        },

        afficherWord2(event) {
            this.word2 = event.target.value;
            console.log(this.word2);
        },

        alerte() {
            alert("ALERTE GENERALE");
        }

    }
}).mount('#app');