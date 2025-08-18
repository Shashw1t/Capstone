const jwt = require('jsonwebtoken');

const requireAuth = (req,res,next) =>{
    const token = req.cookies.token;
    if(!token){
    if(req.accepts('html')){
      return res.redirect('/auth/login');
    }
    return res.status(401).json({ error: "Authentication required" });
  }
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch(err){
    if(req.accepts('html')){
      return res.redirect('/auth/login');
    }
    return res.status(401).json({ error: "Invalid or expired token" });
  }
};

module.exports = requireAuth;