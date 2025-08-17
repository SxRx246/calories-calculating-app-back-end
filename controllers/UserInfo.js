const UserInfo = require('../models/Food')

const createUserInfo = (async (req, res) => {
    try {
        const create = await UserInfo.create(req.body)
        res.status(201).json(create)
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }

})

const showUserInfoDetails = (async (req, res) => {
    try {
        const UserInfo = await UserInfo.findById(req.params.id)
        if (UserInfo)
            res.status(200).json(UserInfo)
        else
            res.sendStatus(404)
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
})


module.exports = {
    createUserInfo,
    showUserInfoDetails
}
