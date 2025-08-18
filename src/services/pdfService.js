const pdfParse = require('pdf-parse');

exports.extractTextFromPDFBuffer = async(buffer)=>{
    const data = await pdfParse(buffer);
    return (data.text || '').trim();
};