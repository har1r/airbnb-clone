const imageDownloader = require('image-downloader');
const fs = require('fs');

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
        const uploadedFiles = [];
        for(let i = 0; i < req.files.length; i++) {
            const {path, originalname} = req.files[i];
            const parts = originalname.split('.');
            const ext = parts[parts.length - 1];
            const newPath = path + '.' + ext;
            fs.renameSync(path, newPath);
            uploadedFiles.push(newPath.replace('uploads\\', ''));
        }
        res.json(uploadedFiles);
    }
};

module.exports = placeController;