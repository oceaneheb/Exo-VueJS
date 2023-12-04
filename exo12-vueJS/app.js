Vue.createApp({

    data() {
        return {
            film: "",
            mesFilms: [""],
        };
    },
    
    methods: {
        ajouterFilm() {
            push.this.mesFilms(this.film);
        },
    }
}).mount('#app');
