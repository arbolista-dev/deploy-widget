var express = require('express');
var app = express();

var execFile = require('child_process').execFile;
var githubhook = require('githubhook');
var github = githubhook({
    host: '0.0.0.0',
    port: 4000,
    path: '/widget/githook',
    secret: 'zfj21rKWOrvJ6jTCI5rW',
    logger: console,
});

app.use('/widget', express.static(__dirname + '/release/dist'));

app.get('/widget/githook', function(req, res) {
  github.on('push:cc-calculator-widget:refs/heads/master', function (data) {
      // Exec a shell script
      var execOptions = {
          maxBuffer: 1024 * 1024 // Increase max buffer to 1mb
      };
      execFile(__dirname + 'deploy.sh', execOptions, function(error, stdout, stderr) {
          if( error )
          {
              console.log(error)
          }
      });
  });
});

app.listen(process.env.PORT || 4000, function() {
  console.log('Express server listening.');
});
