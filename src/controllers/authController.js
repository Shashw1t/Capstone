const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async(req,res) =>{
    try{
        const { username, email, password } = req.body;
        const passwordHash = await bcrypt.hash(password, 12);
        const user = await User.create({ username, email, passwordHash });
        res.status(201).json({message: "User registered", user:{username: user.username, email:user.email}});
    } catch(err){
        res.status(400).json({error: err.message});
    }
}

exports.login = async (req,res)=>{
    try{
        const { username, password } = req.body;
        const user = await User.findOne( {username} );
        if(!user) return res.status(401).json({error: "Invalid credentials"});

        const isMatch = await bcrypt.compare(password, user.passwordHash);
        if(!isMatch) return res.status(401).json({error: "Invalid credentials"});

        const token = jwt.sign({ id: user._id, username: user.username}, process.env.JWT_SECRET, { expiresIn: '7d' });
        res.cookie("token", token, { httpOnly: true, sameSite: "lax" });
        res.json({message: "Login successful"});
    } catch(err){
        res.status(400).json({error: err.message});
    }
}

exports.logout = (req,res) =>{
    res.clearCookie("token");
    res.json({message: "Logged out"});
};