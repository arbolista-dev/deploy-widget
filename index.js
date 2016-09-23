var app = express();

app.use('/dist', express.static(__dirname + '/dist'));

app.listen(process.env.PORT || 3000);

var execFile = require('child_process').execFile;
var githubhook = require('githubhook');
var github = githubhook({
    host: '0.0.0.0',
    port: 80,
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
