const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
require('dotenv').config();

module.exports.requireToken = async (req, res, next) => {
    const { authorization } = req.headers;
    console.log('Input: ', authorization);
    if(!authorization) {
        return res.status(400).send({
            success: false,
            message: 'You must logged in'
        })
    }

    console.log('Check');
    const token = authorization.replace('Bearer ', "");
    jwt.verify(token, process.env.jwtKey, async (err, payload) => {
        if(err) {
            return res.status(400).send({
                success: false,
                message: 'You must logged in'
            })
        }

        const { userId } = payload;
        await User.findById({
            _id: userId
        }, (err, user) => {
            if(err) {
                res.send({
                    success: false,
                    message: `Server error`
                })
            }
            
            req.userId = userId;
            console.log(req.userId);
            next();
        })
    })
}