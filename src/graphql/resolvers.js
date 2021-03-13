// DATA
import films from "../../data/films.json";
import persons from "../../data/persons.json";
import times from "../../data/times.json";

module.exports = {
    Query: {
        getAllFilms: () => {
            return films;
        },
    
        getAllPersons: () => {
            return persons;
        },
    
        getProducers: () => {
            return persons.filter( (p) => { return p.type === "producer" } )
        },
    
        getActers: () => {
            return persons.filter( (p) => { return p.type === "acter" } )
        },
    
        getPerson: ( _, params ) => {
            return persons.find( ({ id }) => { return id === params.id } )
        },
    
        getFilm: ( _, params ) => {
            return films.find( ({ id }) => { return id === params.id } )
        },
    
        getAllTimes: () => {
            return times;
        },
        
        getTime: ( _, params ) => {
            return times.find( ({ id }) => { return id === params.id } )
        }
    } 
}