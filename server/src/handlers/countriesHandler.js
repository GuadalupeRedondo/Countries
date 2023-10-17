const { 
    getAllCountries,
    getCountryById,
    getCountriesByName,
    getCountries,
    postCountries
} = require("../controllers/countriesController")

const getAllCountriesHandler = async(req, res) => {
    const {name} = req.query;
    try {
        const allCountries = name 
        ? await getCountriesByName(name)
        : await getAllCountries()

        if(allCountries.length){
            res.status(200).json(allCountries)
        }else{
            res.status(200).json('Not countries')
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const getCountryByIdHandler = async(req, res) => {
    const {id} = req.params

    try {
        const country = await getCountryById(id)

        if(country['error']) throw Error(country.error)

        res.status(200).json(country)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const dbHandler = async(req,res) =>{
    try {
        const countries = await getCountries()
        const loadCountries = await postCountries(countries)

        res.status(200).json(loadCountries)
    } catch (error) {
        console.log(error)
        res.status(400).send(error.message)
    }
}

module.exports = {
    getAllCountriesHandler,
    getCountryByIdHandler,
    dbHandler
}