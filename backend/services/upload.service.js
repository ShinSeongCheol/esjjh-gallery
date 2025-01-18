const db = require('../models')
const fs = require('fs');
const path = require('path')
const Picture = db.Picture;

const pictureService = {};

pictureService.getImages = async function() {
    const image_list = await Picture.findAll();
    
    const json = [];
    for (image of image_list) {
        let dataValues = image.dataValues;

        let item = {}
        item.id = dataValues.id;
        item.image_name = dataValues.original_name;
        item.mime_type = dataValues.mime_type;
        item.image_path = path.join(dataValues.destination, dataValues.filename);
        item.image_data = fs.readFileSync(item.image_path, (err, data) => {
            return image_data;
        })

        json.push(item);
    }

    return json;
}

pictureService.postImage = async function(fileDTO) {
    const file = {
        original_name: fileDTO.originalname,
        encoding: fileDTO.encoding,
        mime_type: fileDTO.mimetype,
        size: fileDTO.size,
        destination: fileDTO.destination,
        filename: fileDTO.filename,
    }
    const image = await Picture.create(file);
    const dataValues = image.dataValues;
    return dataValues.id;
}

module.exports = pictureService;