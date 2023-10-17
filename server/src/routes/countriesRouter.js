const { Router } = require("express");
const {
    getAllCountriesHandler,
    getCountryByIdHandler,
    dbHandler
} = require('../handlers/countriesHandler')

const countriesRouter = Router();

countriesRouter.get('/db', dbHandler)
countriesRouter.get('/', getAllCountriesHandler);
countriesRouter.get('/:id', getCountryByIdHandler);


module.exports = countriesRouter;