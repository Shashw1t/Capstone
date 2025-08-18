const upload = require('../middleware/upload');
const Document = require('../models/Document');

exports.getDashboard = async (req,res)=>{
    try{
        const docs = await Document.find({userId: req.user.id}).sort({uploadedAt: -1});
        res.render('dashboard', {user: req.user, docs});
    } catch(err){
        res.status(500).send('Error loading dashboard');
    }
};