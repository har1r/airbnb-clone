const User = require("../models/User.js");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

class AuthController{
    
    static async loginAuth(req, res) {
        const {email, password} = req.body;
        const userLog = await User.findOne({email});
        if(userLog) {
            const verfifyPass = bcrypt.compareSync(password, userLog.password);
            if(verfifyPass) {
                const jwtSecret = 'sdfaskjhf626woigfagd24sghkag';
                jwt.sign(
                    {email: verfifyPass.email, id: verfifyPass._id}, 
                    jwtSecret, 
                    {}, 
                    (err, token) => {
                        if(err) throw err
                        res.status(200).cookie("token", token).json({"result": "login is successfull", "data": userLog});
                    },
                );
            };
        }else {
            res.status(400).json({"result": "login is failed"});
        };
    };

    static async registerAuth(req, res) {
        const {name, email, password} = req.body;
        const saltRounds = 10;
        const bcryptSalt = bcrypt.genSaltSync(saltRounds);
        const userReg = await User.create({
            name,
            email,
            password: bcrypt.hashSync(password, bcryptSalt),
        });
        if(userReg) {
            res.status(201).json({"result": "registration is successfull", "data": userReg});
        }else {
            res.status(400).json({"result": "registration is failed"});
        };
    };
};

module.exports = AuthController;