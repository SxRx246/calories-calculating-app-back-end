const UserInfo = require('../models/UserInfo')

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
        const userDetails = await UserInfo.findById(req.params.id)
        if (userDetails)
            res.status(200).json(userDetails)
        else
            res.sendStatus(404)
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
})

const updateUserInfo = (async (req, res) => {
    try {
        const updatedInfo = await UserInfo.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )

        if (updatedInfo) {
            res.status(200).json(updatedInfo)
        } else {
            res.sendStatus(404)
        }

    } catch (error) {
        res.status(500).json({ error: error.message })
    }

})


module.exports = {
    createUserInfo,
    showUserInfoDetails,
    updateUserInfo,
}
