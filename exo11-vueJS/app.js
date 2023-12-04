Vue.createApp({

    data() {
        return {
            class1: "",
            backgroundColor: "",
            hello: false,
            world: false,
            hidden: false,
            visible: true,
        };
    },
    
    methods: {
        afficherClassInput1 () {
            if (this.class1 === "hello") {
                this.hello = true;
            } else if (this.class1 === "world") {
                this.world = true;
            } else {
                this.world = false;
                this.hello = false;
            }
        },

        afficherPremierParagraphe() {
            if (this.hidden == true) {
                this.hidden = false;
                this.visible = true
            } else {
                this.hidden = true,
                this.visible = false
            }
        }
    },
    
}).mount('#app');

