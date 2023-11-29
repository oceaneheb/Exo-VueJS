//! Création d'une instance Vue c'est notre application
Vue.createApp({
//! Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
//! Toutes les data seront contenues dans this
data() {
    return {
    infos: [],
    unLivre: "{{unLivre}}",
    titre: 'Les mémoires de Steven Seagal',
    numero: 123456789,
    texte: ["du texte", 99],
    name: {"name":"COOL","tel":1234451}
    };
},


//! Dans cet Object methods, on va écrire nos fonctions
// methods: {
//     infos.push(provenance);
//     },
},

//! L'application est montée sur la balise HTML qui possède l'id app
).mount('#app');