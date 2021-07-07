var express = require('express');
var router = express.Router();
let entries = require('./entries')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.statusCode = 200;
  res.end('<h1>Hello from the backend!</h1>');
});

router.put('/', function(req, res, next) {
  res.statusCode = 403;
  res.end('<h1>PUT operation is not supported</h1>');
});

router.post('/', function(req, res, next) {
  res.statusCode = 403;
  res.end('<h1>POST operation is not supported</h1>');
});

router.delete('/', function(req, res, next) {
  res.statusCode = 403;
  res.end('<h1>DELETE operation is not supported</h1>');
});

//-----------------------------------------------------------------

router.get('/getAllBooks', function(req, res, next){
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;
  res.json(entries.getAllEntries())
});

router.put('/getAllBooks', function(req, res, next) {
  res.statusCode = 403;
  res.end('<h1>PUT operation is not supported</h1>');
});

router.post('/getAllBooks', function(req, res, next) {
  res.statusCode = 403;
  res.end('<h1>POST operation is not supported</h1>');
});

router.delete('/getAllBooks', function(req, res, next) {
  res.statusCode = 403;
  res.end('<h1>DELETE operation is not supported</h1>');
});

//-----------------------------------------------------------------

router.get('/addBooks', function(req, res, next) {
  res.statusCode = 403;
  res.end('<h1>GET operation is not supported</h1>');
});

router.put('/addBooks', function(req, res, next) {
  res.statusCode = 403;
  res.end('<h1>PUT operation is not supported</h1>');
});


router.post('/addBooks', function(req, res, next) {
  try{
    var id = entries.getLastID() + 1;
    var title = req.body.title;
    var author = req.body.author;
    var pdate = req.body.pdate;
    var tags = req.body.tags;
    tags = tags.map(tags => tags.toLowerCase())

    data = {}
    data ={
      "id": id,
      "title": title,
      "author": author,
      "pdate": pdate,
      "tags": tags
    }
    entries.putEntry(data)
		res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.json({status: "success"})
  }
  catch(err){
    next(err)
  }
});

router.delete('/addBooks', function(req, res, next) {
  res.statusCode = 403;
  res.end('<h1>DELETE operation is not supported</h1>');
});

//-----------------------------------------------------------------

router.get('/search', function(req, res, next) {
  res.statusCode = 403;
  res.end('<h1>GET operation is not supported</h1>');
});

router.put('/search', function(req, res, next) {
  res.statusCode = 403;
  res.end('<h1>PUT operation is not supported</h1>');
});

router.post('/search', function(req, res, next){
  try{
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.json(entries.searchEntry(req.body.tags.toLowerCase()))
}
  catch(err){
    next(err)
  }
});

router.delete('/search', function(req, res, next) {
  res.statusCode = 403;
  res.end('<h1>DELETE operation is not supported</h1>');
});

module.exports = router;
