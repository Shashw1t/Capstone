const express = require('express');
const requireAuth = require('../middleware/auth');
const upload = require('../middleware/upload');
const { getUpload, uploadDocument, listDocuments, getDocDetail} = require('../controllers/docController');

const router = express.Router();

router.get('/upload', requireAuth, getUpload);
router.post('/upload', requireAuth, upload.single('document'), uploadDocument);
router.get('/', requireAuth, listDocuments);
router.get('/:id', requireAuth, getDocDetail);

module.exports = router;