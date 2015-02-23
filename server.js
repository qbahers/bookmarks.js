var express             = require('express'),
    app                 = express(),
    bodyParser          = require('body-parser'),
    mongoose            = require('mongoose'),
    bookmarksController = require('./server/controllers/bookmarks-controller');

mongoose.connect('mongodb://localhost:27017/bookmarks');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/client/views/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));

app.get('/api/bookmarks', bookmarksController.list);
app.post('/api/bookmarks', bookmarksController.create);
app.delete('/api/bookmarks/:id', bookmarksController.delete);

app.listen(3000, function() {
  console.log('I\'m Listening...');
});
