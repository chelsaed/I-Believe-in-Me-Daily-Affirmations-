const express = require('express');
const router = express.Router();
const affirCtrl = require('../controller/affirCtrl');

router.get('/', affirCtrl.index);
router.get('/new', affirCtrl.new);
router.get('/:id', affirCtrl.show);
//router.post('/', affirCtrl.create);

module.exports = router;