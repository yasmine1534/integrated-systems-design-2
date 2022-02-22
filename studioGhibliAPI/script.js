//Start of reference
const filmsAPI = "https://ghibliapi.herokuapp.com/films/";

const app = Vue.createApp({
    data() {
        return {
            films: null,
            /* axios stores all the Ghibli films here after fetching them */
            film: null,
            loading: true
        }
    },
    methods: {
        showFilm(id) {
            this.film = this.films[id];

            // Referenced from https://stackoverflow.com/questions/40730116/scroll-to-bottom-of-div-with-vue-js
            var container = this.$refs.film;
            container.scrollIntoView({behavior: 'smooth'});
            //End of Reference
        },
        scrollTop() {
            var top = this.$refs.title;
            top.scrollIntoView({behavior: 'smooth'});
        }
    },
    mounted() {
        /* Using axios to fetch data. 
        You could also use Fetch API if you prefer*/

        axios.get(filmsAPI)
            .then(response => {
                this.films = response.data,
                    this.loading = false

            })
            .catch(error => console.log(error));
    }
}).mount('#app')
// Rerenced from Harold's Studio Ghibli example