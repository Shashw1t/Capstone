const path = require('path');
const Document = require('../models/Document');

exports.uploadDocument = async(req,res)=> {
    if(!req.file) return res.status(400).json({ error: "no file uploaded" });

    try{
        const doc = await Document.create({
            userId: req.user.id,
            originalName: req.file.originalname,
            filename: req.file.filename,
            path: req.file.path,
            mimetype: req.file.mimetype,
            size: req.file.size
        });
        res.json({
            message : `File uploaded and saved to DB`,
            document: doc
        });
    } catch(err){
        res.status(500).json({ error: "Failed to process the file" });
    }
};

exports.listDocuments = async(req,res) =>{
    try{
        const docs = await Document.find({ userId: req.user.id }).sort({ uploadedAt: -1 });
        res.json(docs);
    } catch(err){
        res.status(500).json({ error: "Failed to fetch documents"});
    }
};