exports.getDashboard = (req,res)=>{
    res.json({ message: `welcome, ${req.user.username}! This is your dashboard.` });
};