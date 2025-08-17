const express = require('express');
const requireAuth = require('../middleware/auth');
const upload = require('../middleware/upload');
const {uploadDocument, listDocuments} = require('../controllers/docController');

const router = express.Router();

router.post('/upload', requireAuth, upload.single('document'), uploadDocument);
router.get('/', requireAuth, listDocuments);

module.exports = router;