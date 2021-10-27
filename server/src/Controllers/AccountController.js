const accountModel = require('../Models/AccountModel');
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');

class AccountController {
    //insert account
    async insertAccount(username, password, userId){
        try{
            const checkAccount = await accountModel.findOne({username});
            if (checkAccount)
                return null;

            const hashPassword = await argon2.hash(password);

            const newAccount = new accountModel({userId, username, password:hashPassword});

            await newAccount.save();

            const accessToken = jwt.sign(
                {accountId: newAccount._id},
                process.env.SECRET
            )

            return accessToken;

        }
        catch(error){
            console.log(error.message);
            return null;
        }
    }

    //login account
    async loginAccount(req, res){
        const {username, password} = req.body;

        if (!username || !password) 
            return res.json({success: false, message: 'Missing information'});

        try{
            const account = await accountModel.findOne({username});

            if (!account)
                return res.json({success: false, message: 'Invalid account'});

            const checkPassword = await argon2.verify(account.password, password);

            if (!checkPassword)
                return res.json({success: false, message: 'Invalid account'});

            const accessToken = jwt.sign(
                {accountId: account._id},
                process.env.SECRET
            )

            return res.json({success: true, message: 'Login successfully', accessToken});
        }
        catch(error){
            return res.json({success: false, message: error.message});
        }
    }

    //change password
    async changePassword(req, res){
        const {oldPassword, newPassword} = req.body;
        if (!oldPassword || !newPassword)
            return res.json({success: false, message: 'Missing information'});

        try{
            const account = await accountModel.findById(req.accountId);
            if (!account)
                return res.json({success: false, message: 'Invalid account'});

            const checkPassword = await argon2.verify(account.password, oldPassword);

            if (!checkPassword)
                return res.json({success: false, message:'Invalid account'});

            const hashPassword = await argon2.hash(newPassword);

            await accountModel.findOneAndUpdate({_id:req.accountId}, {password: hashPassword});

            return res.json({success: true, messgae: 'Change password successfully'});
        }
        catch(error){
            return res.json({success: false, message: error.message});
        }
    }

    
}

module.exports = new AccountController;