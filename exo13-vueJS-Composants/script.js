Vue.createApp({

    data() {
        return {
            detailsVisibles: false,
            lesAmis: [{
                id: 1,
                name: 'Julie',
                phone: 3742,
                email: 'julie@gmail.com'
            },
            {
                id: 2,
                name: 'Océane',
                phone: 2859,
                email: 'oceane@gmail.com' 
            }],
        };
    },
    
    methods: {
        toggleDetails() {
            this.detailsVisibles = !this.detailsVisibles;
            console.log(this.detailsVisibles)
        },
    }
}).mount('#app');
