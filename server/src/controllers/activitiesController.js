const { Activity, Country } = require('../db')

const postActivities = async (name, difficulty, duration, season, countries) => {
    let newActivity = await Activity.create({
        name,
        difficulty,
        duration,
        season
    });
    newActivity.addCountry(countries)

    return newActivity
}

const getAllActivities = async () => {
    const allActivities = await Activity.findAll({
        include:{
            model:Country,
            attributes:['name'],
            through:{
                attributes:[],
            }
        }
    });

    return allActivities
}

module.exports = {
    postActivities,
    getAllActivities
}