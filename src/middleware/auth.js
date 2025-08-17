const jwt = require('jsonwebtoken');

const requireAuth = (req,res,next) =>{
    const token = req.cookies.token;
    if(!token) return res.status(401).json({ error: "Authentication required"});

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch(err){
        return res.status(401).json({error: "invalid ya expired token"});
    }
}

module.exports = requireAuth;