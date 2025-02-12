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

        const token = await userService.signup(user);

        res.cookie('refresh_token', token.refresh_token, {httpOnly: true, sameSite: 'strict'});
        res.json({"access_token":token.access_token});
    }catch(err) {
        console.log(err);

        res.status(400).json(err);
    }
}

module.exports = userController;
