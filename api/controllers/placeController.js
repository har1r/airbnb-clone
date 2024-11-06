const imageDownloader = require('image-downloader');

class placeController{
    static async linkPhotoUpload(req, res) {
        const {link} = req.body;
        const newName = 'photo' + Date.now() +'.jpg';
        await imageDownloader.image({
            url: link,
            dest: '/Users/AIO SAKA/Desktop/airbnb-clone/api/uploads/' +newName,
        });
        res.json(newName);
    };

    static photoUpload(req, res) {
        res.json(req.files);
    }
};

module.exports = placeController;