const User = require("../models/User.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const jwtSecret = process.env.JWT_SECRET;

class AuthController{
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
    
    static async loginAuth(req, res) {
        const {email, password} = req.body;
        const userLog = await User.findOne({email});
        if(userLog) {
            const verfifyPass = bcrypt.compareSync(password, userLog.password);
            if(verfifyPass) {
                jwt.sign({email:userLog.email, id: userLog._id, name: userLog.name}, jwtSecret, {}, (err, token) => {
                        if(err) throw err
                        res.status(200).cookie("token", token).json({"result": "login is successfull", "data": userLog});
                    },
                );
            };
        }else {
            res.status(400).json({"result": "login is failed"});
        };
    };

    static async profileAuth(req, res) {
        const {token} = req.cookies;
        if(token) {
            jwt.verify(token, jwtSecret, {}, async(err, userProf) => {
                if(err) throw err;
                const {name, email, _id} = await User.findById(userProf.id)
                res.json({name, email, _id});
            });
        }else {
            res.json(null);
        };
    };
};

module.exports = AuthController;