const mvModel = require('../Models/MusicVideoModel');

class MusicVideoController {
    //insert 
    async insertMV(req, res){
        const {name, link, music, description} = req.body;

        if (!name || !link)
            return res.json({success: false, message: 'Missing information'});

        try{
            const checkLink = await mvModel.findOne({link});
            if (checkLink)
                return res.json({success: false, message: 'Your video has been existed'});
            var today = new Date();
            var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            
            const newMV = new mvModel({name, link, music, description, createAt: date});

            await newMV.save();

            return res.json({success :true, message: 'Insert MV successfully'});
        }
        catch(error){
            return res.json({success: false, message: error.message})
        }
    }

    //update infor
    async updateInfor(req, res){
        const {name, link, music, description} = req.body;

        if (!link)
            return res.json({success: false, message: 'Missing information'});

        try{
            const mv = await mvModel.findOne({link});

            if (!mv)
                return res.json({success: false, message: 'Invalid mv'});

            await mvModel.findOneAndUpdate({link},{name,music, description});
            return res.json({success: true, message: 'Update information successfully'});
        
        }
        catch(error){
            return res.json({success: false, message: error.message});
        }
    }
}


module.exports = new MusicVideoController;