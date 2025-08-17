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



module.exports = {
    createUserInfo
}
