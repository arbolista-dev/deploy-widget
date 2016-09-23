var express = require('express');
var app = express();
require('dotenv').config();

var createHandler = require('github-webhook-handler')
var handler = createHandler({ path: '/widget', secret: process.env.SECRET })
var execFile = require('child_process').execFile;

app.use('/widget', express.static(__dirname + '/release/dist'));

app.post('/widget', function(req, res) {
  handler(req, res, function (err) {
      res.statusCode = 404
      res.end('no such location')
  });
});

handler.on('error', function (err) {
  console.error('Error:', err.message)
})

handler.on('push', function (event) {
  console.log('Received a push event for %s to %s',
    event.payload.repository.name,
    event.payload.ref)
    // Exec a shell script

    if (event.payload.repository.name === 'cc-calculator-widget' && event.payload.ref === 'refs/heads/master')
    var execOptions = {
        maxBuffer: 1024 * 1024 // Increase max buffer to 1mb
    };
    execFile(__dirname + '/deploy.sh', execOptions, function(error, stdout, stderr) {
        if( error )
        {
            console.log(error)
        }
    });
})

app.listen(process.env.PORT || 4000, function() {
  console.log('Express server listening.');
});
