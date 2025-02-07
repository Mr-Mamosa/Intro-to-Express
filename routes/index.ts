import express from 'express';
/* GET home page. */
export default router;
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// module. exports = router;
