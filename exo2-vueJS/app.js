//! Création d'une instance Vue c'est notre application
Vue.createApp({
    //! Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
    //! Toutes les data seront contenues dans this
    data() {
        return {
        number: Math.random(),
        };
    },
    
    
    //! Dans cet Object methods, on va écrire nos fonctions
    methods: {
        afficherLivreRandom() {
            // let number = Math.random();
            if (this.number >= 0.5) {
                return 'Le livre de la Jungle';
            } else {
                return 'La Belle et la Bête';
            }
        }
},
    
    //! L'application est montée sur la balise HTML qui possède l'id app
}).mount('#app');
