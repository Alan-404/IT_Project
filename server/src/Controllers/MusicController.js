const musicModel = require('../Models/MusicModel');

class MusicController {
    //insert music
    async insertMusic(req, res){
        const {name, link, singerId, musicianId, description} = req.body;
        if (!name || !link || !singerId || !musicianId)
            return res.json({success: false, message: 'Missing information'});

        try{
            const checkMusic = await musicModel.findOne({name, link, singerId, musicianId});

            if (checkMusic)
                return res.json({success: false, message: 'Music has been existed'});

            const newMusic  = new musicModel({name, link, singerId, musicianId, description, });

            await newMusic.save();

            return res.json({success: true, message: 'Insert music successfully'});
        }
        catch(error){
            return res.json({success: false, message: error.message});
        }
    }


}

module.exports = new MusicController;