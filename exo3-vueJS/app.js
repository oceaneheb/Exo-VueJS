Vue.createApp({

    data() {
        return {
            url: "https://picsum.photos/200/300",
            nom: "Mario",
            age: 45,
            nombreFetiche: "NB Random : " + Math.random(),
        };
    },
    
    methods: {
        agePlusDix() {
            return this.age + 10;
        }
    },
    
}).mount('#app');