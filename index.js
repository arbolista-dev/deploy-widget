var express = require('express');
var app = express();

app.use(express.static(__dirname + '/release/dist'));

app.listen(process.env.PORT || 4000, function() {
  console.log('Express server listening.');
});

var execFile = require('child_process').execFile;
var githubhook = require('githubhook');
var github = githubhook({
    host: '0.0.0.0',
    port: 3240,
    path: '/githook',
    secret: 'zfj21rKWOrvJ6jTCI5rW',
    logger: console,
});

github.listen();

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
