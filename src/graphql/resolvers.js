import database from "../firebase/index.js";

export default {
    Query: {
        getAllFilms: () => {

            let data

            const getData = async () => {
                await database.ref().child("films").get()
                .then( 
                    (s) => { if ( s.exists() ) {  data = s.val() } }
                )
                .catch( (error) => { console.error(error) });
            }

            return getData().then( () => { return data } )
        },
    
        getAllPersons: () => {

            let data

            const getData = async () => {
                await database.ref().child("persons").get()
                .then( 
                    (s) => { if ( s.exists() ) {  data = s.val() } }
                )
                .catch( (error) => { console.error(error) });
            }

            return getData().then( () => { return data } )
        },
    
        getProducers: () => {

            let data

            const getData = async () => {
                await database.ref().child("persons").get()
                .then( 
                    (s) => { if ( s.exists() ) {  data = s.val() } }
                )
                .catch( (error) => { console.error(error) });
            }

            return getData().then( () => { return data.filter( (p) => { return p.type === "producer" } ) } )
        },
    
        getActers: () => {

            let data

            const getData = async () => {
                await database.ref().child("persons").get()
                .then( 
                    (s) => { if ( s.exists() ) {  data = s.val() } }
                )
                .catch( (error) => { console.error(error) });
            }

            return getData().then( () => { return data.filter( (p) => { return p.type === "acter" } ) } )

            // return getData().then( () => { return data.persons.filter( (p) => { return p.type === "acter" } ) } )
        },
    
        getPerson: ( _, params ) => {

            let data

            const getData = async () => {
                await database.ref().child(`/persons/${params.id}`).get()
                .then( 
                    (s) => { if ( s.exists() ) {  data = s.val() } }
                )
                .catch( (error) => { console.error(error) });
            }

            return getData().then( () => { return data } )
        },
    
        getFilm: ( _, params ) => {

            let data

            const getData = async () => {
                await database.ref().child(`/films/${params.id}`).get()
                .then( 
                    (s) => { if ( s.exists() ) {  data = s.val() } }
                )
                .catch( (error) => { console.error(error) });
            }

            return getData().then( () => { return data } )

            // return getData().then( () => { return data.films.find( ({ id }) => { return id === params.id } ) } )
        },
    
        getAllTimes: () => {

            let data

            const getData = async () => {
                await database.ref().child("times").get()
                .then( 
                    (s) => { if ( s.exists() ) {  data = s.val() } }
                )
                .catch( (error) => { console.error(error) });
            }

            return getData().then( () => { return data } )

            // return getData().then( () => { return data.times } )
        },
        
        getTime: ( _, params ) => {

            let data

            const getData = async () => {
                await database.ref().child("times").get()
                .then( 
                    (s) => { if ( s.exists() ) {  data = s.val() } }
                )
                .catch( (error) => { console.error(error) });
            }

            return getData().then( () => { return data.find( ({ id }) => { return id === params.id } ) } )

            // return getData().then( () => { return data.times.find( ({ id }) => { return id === params.id } ) } )
        }
    } 
}