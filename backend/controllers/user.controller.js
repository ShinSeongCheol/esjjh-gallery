const userService = require('../services/user.service');

const userController = {};

userController.login = async (req, res, next) => {
    console.log(req);
    res.send('hi');
}

userController.signup = async (req, res, next) => {
    try{
        user = {
            id: req.body.id,
            password: req.body.password,
            email: req.body.email,
            profile_image: req.file
        }
    
        const result = await userService.signup(user);
    
        res.json(result)
    }catch(err) {
        res.json(err);
    }
}

module.exports = userController;
