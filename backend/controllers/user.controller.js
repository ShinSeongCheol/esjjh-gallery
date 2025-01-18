const db = require("../models");
const Picture = db.Picture;

const get = async (req, res, next) => {
    const picture_list = await Picture.findAll();
    res.send(picture_list);
};

const post = async (req, res, next) => {
    const file = req.file;
    const picture = await Picture.create({
        original_name: file.originalname,
        encoding: file.encoding,
        mime_type: file.mimetype,
        size: file.size,
        destination: file.destination,
        filename: file.filename,
    });
    res.send(picture);
};

module.exports = {
    get,
    post,
};
