const getGroups = async (req, res) => {
    try {
        res.status(200).json({message: 'ok'})
    } catch (e) {
        res.status(500).json({message: `${e}`})
    }
}

const getGroupById = async (req, res) => {
    try {
        res.status(200).json({message: 'ok'})
    } catch (e) {
        res.status(500).json({message: `${e}`})
    }
}


const createGroup = async (req, res) => {
    try {
        res.status(200).json({message: 'ok'})
    } catch (e) {
        res.status(500).json({message: `${e}`})
    }
}


const updateGroup = async (req, res) => {
    try {
        res.status(200).json({message: 'ok'})
    } catch (e) {
        res.status(500).json({message: `${e}`})
    }
}


const removeGroup = async (req, res) => {
    try {
        res.status(200).json({message: 'ok'})
    } catch (e) {
        res.status(500).json({message: `${e}`})
    }
}


module.exports = {
    getGroups,
    getGroupById,
    createGroup,
    updateGroup,
    removeGroup
}