import express from 'express';
const router = express.Router(); // Declare router

/* GET home page. */
export default router;
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module. exports = router;
