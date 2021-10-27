const userModel = require('../Models/UserModel');
const AccountController = require('../Controllers/AccountController');

class UserController{
    //insert new user
    async insertUser(req, res){
        const {firstName, middleName, lastName, bDate, phone, address,email, username, password} = req.body;

        if (!firstName || !lastName || !username || !password) 
            return res.json({success: false, message: 'Missing information'});

        try{
            if (email){
                const checkEmail = await userModel.findOne({email});
                if (checkEmail)
                    return res.json({success: false, message: 'Email has been existed'});
            }
            const newUser = new userModel({firstName, middleName, lastName, email, bDate, phone, address})

            const accessToken = await AccountController.insertAccount(username, password, newUser._id);

            if (!accessToken)
                return res.json({success: false, messgae:'Insert account fail'});

            await newUser.save();
                
            return res.json({success: true, message: 'Insert user successfully', accessToken});


        }
        catch(error){
            return res.json({success: false, message: error.message});
        }
    }
}

module.exports = new UserController;