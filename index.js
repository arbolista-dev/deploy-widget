var express = require('express');
var app = express();

var createHandler = require('github-webhook-handler')
var handler = createHandler({ path: '/widget', secret: 'zfj21rKWOrvJ6jTCI5rW' })
var execFile = require('child_process').execFile;

app.use('/widget', express.static(__dirname + '/release/dist'));

app.post('/widget', function(req, res) {

  var execOptions = {
      maxBuffer: 1024 * 1024 // Increase max buffer to 1mb
  };
  
  execFile(__dirname + '/deploy.sh', execOptions, function(error, stdout, stderr) {
      if( error )
      {
          console.log(error)
      }
  });

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
