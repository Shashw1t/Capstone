const path = require('path');
const Document = require('../models/Document');
const pdfService = require('../services/pdfService');

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

        //yadi pdf hai to text extract hona chahiye pehle
        let extractedText = '';
        if(req.file.mimetype === 'application/pdf'){
            const fs = require('fs');
            const buffer = fs.readFileSync(req.file.path);
            extractedText = await pdfService.extractTextFromPDFBuffer(buffer);

            doc.extractedText = extractedText;
            await doc.save(); 
        }
        // res.json({
        //     message : `File uploaded, saved to DB, and text extracted`,
        //     document: doc,
        //     extractedText: extractedText
        // });
        res.redirect(`/docs/${doc._id}`);
    } catch(err){
        res.status(500).json({ error: "Failed to save document info or extract text" });
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

exports.getUpload = (req,res)=>{
    res.render('upload');
};

exports.getDocDetail = async (req, res) => {
    try {
        const doc = await Document.findOne({ _id: req.params.id, userId: req.user.id });
        if (!doc) return res.status(404).send('Document not found');
        res.render('docDetail', { doc });
    } catch (err) {
        res.status(500).send('Error loading document');
    }
};