const { Country, Activity } = require('../db')
const axios = require("axios");

const getAllCountries = async () => {
    const allCountries = await Country.findAll({
        include:{
            model:Activity,
            attributes:['name'],
            through:{
                attributes:[],
            }
        }
    });

    return allCountries
}

const getCountryById = async (id) => {
    const countryFound = await Country.findOne({
        where: {id},
        include:{
            model:Activity,
            attributes:['name'],
            through:{
                attributes:[],
            }
        }
    });

    if(!countryFound) return {error: 'Country not found'};

    return countryFound;
}

const getCountriesByName = async (name) => {
    const nameTCL = name.toLowerCase();
    let countriesFind = await Country.findAll({
        include:{
            model:Activity,
            attributes:['name'],
            through:{
                attributes:[],
            }
        }
    })
    countriesFind = countriesFind.filter(country => country.name.toLowerCase().includes(nameTCL))
    
    if(!countriesFind) {
        throw new Error('No countries found with that name.')
    }

    return countriesFind
}

const getCountries = async () => {
    const countriesAPI = await axios.get('http://localhost:5000/countries')
    let countriesData = countriesAPI.data
    let mapCountries = countriesData.map((country) => {
        return {
            id: country.cca3,
            name: country.name.common,
            flagImage: country.flags.png,
            continent: country.continents,
            capital: country.capital ? country.capital : [country.name.common],
            subRegion: country.subregion ? country.subregion : country.region,
            area: country.area,
            population: country.population
        }
    })
    return mapCountries
}
const postCountries = async (countries) => {
    const newCountries = await Country.bulkCreate(countries)

    return newCountries
}

module.exports = {
    getAllCountries,
    getCountryById,
    getCountriesByName,
    getCountries,
    postCountries
}