const User = require('../../models/user.model');
const UserSession = require('../../models/usersession.model');
const jwt = require('jsonwebtoken');
require('dotenv').config();
module.exports.signup = (req, res, next) => {
    const { body } = req;
    let { name, email, password, phone } = body;

    if(!name && !email && !password && !phone && !address && !ic) {
        return res.send({
            success: false,
            errorName: true,
            errorEmail: true,
            errorPassword: true,
            errorPhone: true,
            message: 'Error: Fields cannot be blank'
        })
    }

    if(!name) {
        return res.send({
            success: false,
            errorName: true,
            message: 'Error: Name cannot be blank'
        })
    }

    if(!email) {
        return res.send({
            success: false,
            errorEmail: true,
            message: 'Error: Email cannot be blank'
        })
    }

    if(!password) {
        return res.send({
            success: false,
            errorPassword: true,
            message: 'Error: Password cannot be blank'
        })
    }

    if(!phone) {
        return res.send({
            success: false,
            errorPhone: true,
            message: 'Error: Phone cannot be blank'
        })
    }

    email = email.toLowerCase();

    User.find({
        email: email
    }, (err, previousUsers) => {
        if(err) {
            return res.send({
                success: false,
                message: 'Error: Server error'
            })
        }
        else if(previousUsers.length > 0) {
            return res.send({
                success: false,
                errorEmail: true,
                message: 'Error: Account already exist.'
            })
        }
        else {
            let newUser = new User();
            newUser.name = name
            newUser.email = email;
            newUser.password = newUser.generateHash(password);
            newUser.phone = phone;
            newUser.save((err, user) => {
                if(err) {
                    return res.send({
                        success: false,
                        message: 'Error: Server error.'
                    })
                } else {
                    return res.send({
                        success: true,
                        message: 'Signed Up'
                    })
                }
            })
        }
    })
};

module.exports.signin = (req, res, next) => {
    const { body } = req;
    let { email, password } = body;

    if(!email && !password) {
        return res.send({
            success: false,
            errorEmail: 'Email cannot be blank',
            errorPassword: 'Password cannot be blank',
            message: 'Error: Email & Password cannot be blank'
        })
    }

    if(!email) {
        return res.send({
            success: false,
            errorEmail: 'Email cannot be blank',
            message: 'Error: Email cannot be blank'
        })
    }

    if(!password) {
        return res.send({
            success: false,
            errorPassword: 'Password cannot be blank',
            message: 'Error: Password cannot be blank'
        })
    }

    email = email.toLowerCase();

    User.find({
        email: email
    }, (err, users) => {
        if(err) {
            return res.send({
                success: false,
                message: 'Error: Server error'
            })
        }

        // Find user exist in db
        if(users.length !== 1) {
            return res.send({
                success: false,
                errorEmail: 'Email Invalid',
                message: 'Error: Email Invalid'
            })
        }

        // If user is found, compare password
        const user = users[0];
        if(!user.validPassword(password)) {
            return res.send({
                success: false,
                errorPassword: 'Password Invalid',
                message: 'Error: Password Invalid'
            })
        }

        //If user, password are valid
        let userSession = new UserSession();
        const token = jwt.sign({ userId: user._id }, process.env.jwtKey)
        userSession.userId = user._id;
        userSession.save((err, doc) => {
            if(err) {
                return res.send({
                    success: false,
                    message: 'Error: Server error'
                })
            }

            return res.send({
                success: true,
                message: 'Valid sign in',
                token
            })
        })
    })
}

module.exports.verify = (req, res, next) => {
    const { userId } = req;
    User.find({
        _id: userId,
        isDeleted: false
    }, (err, users) => {
        if(err) {
            return res.send({
                success: false,
                message: 'Error: Server error'
            })
        }
        console.log(users);
        if(users.length !== 1) {
            return res.send({
                success: false,
                message: 'Error: Invalid'
            })
        }
        
        return res.send({
            success: true,
            name: users[0].name,
            message: 'Good'
        })

    });
}

module.exports.requireToken = async (req, res, next) => {
    const { authorization } = req.headers;
    if(!authorization) {
        return res.status(400).send({
            success: false,
            message: 'You must logged in'
        })
    }

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

module.exports.signout = (req, res, next) => {
    const { token } = req;
    console.log("sign out: ", token);
    UserSession.findOneAndUpdate({
        _id: token,
        isDeleted: false
    }, {
        $set: { isDeleted: true }
    }, null, (err, sessions) => {
        if(err) {
            return res.send({
                success: false,
                message: 'Error: Server error'
            })
        }

        return res.send({
            success: true,
            message: 'Good'
        })
    });
}