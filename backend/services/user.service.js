const db = require('../models');
const { where } = require('sequelize');

const bcrypt = require('bcrypt');

const UserType = db.UserType;
const User = db.User;
const UserProfileImage = db.UserProfileImage;

const userException = require('./exceptions/user.exception');

const userService = {};
userService.signup = async function (user) {

    const user_type = await UserType.findOrCreate({
        where: {
            type: "ESJJH"
        }
    }).then((res) => {
        return res[0];
    }).catch((err) => {
        console.error(err)
    });

    // 등록된 회원 있는지 확인
    const singend_user = await User.count({
        where: {
            user_id: user.id,
        }
    }).catch((err) => {
        console.error(err)
    });

    // 등록된 회원이 없다면 유저 생성
    if (singend_user === 0) {
        // 비밀번호 암호화
        const salt = bcrypt.genSaltSync(10);
        const hashed_password = bcrypt.hashSync(user.password, salt);

        const signed_user = await User.create({
            user_id: user.id,
            password: hashed_password,
            email: user.email,
            user_type_id: user_type.id
        }).then((res) => {
            return res.dataValues;
        });

        UserProfileImage.create({
            user_id: signed_user.id,
            original_name: user.profile_image.originalname,
            encoding: user.profile_image.encoding,
            mime_type: user.profile_image.mimetype,
            size: user.profile_image.size,
            destination: user.profile_image.destination,
            file_name: user.profile_image.filename,
        });
        
    }else {
        throw new userException.signedUserException("등록된 회원이 존재합니다.");
    }

    return user;
}

module.exports = userService;
