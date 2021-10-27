const artistModel = require('../Models/ArtistModel');


class ArtistController {
    //insert artist
    async insertArtist(req, res){
        const {name, description, image} = req.body;

        var follower = 0;

        if (!name)
            return res.json({success: false, message: 'Missing information'});

        try{
            const newArtist = new artistModel({name, description, image, follower});

            await newArtist.save();

            return res.json({success: true, message: 'Insert artist successfully'});
        }
        catch(error){
            return res.json({success: false, message: error.message});
        }
    }
}

module.exports = new ArtistController;