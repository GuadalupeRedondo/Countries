const {
    postActivities,
    getAllActivities
} = require("../controllers/activitiesController")

const postActivitiesHandler = async (req, res) => {
    const {name, difficulty, duration, season, countries} = req.body

    try {
        const newActivity = await postActivities(name, difficulty, duration, season, countries)

        res.status(200).json(newActivity)
    } catch (error) {
        res.status(404).send(error.message)
    }
}

const getAllActivitiesHandler = async (req, res) => {
    try {
        const allActivities = await getAllActivities()

        res.status(200).json(allActivities)
    } catch (error) {
        return res.status(400).send(error.message)
    }
}

module.exports = {
    postActivitiesHandler,
    getAllActivitiesHandler
}