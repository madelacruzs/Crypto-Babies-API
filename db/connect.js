var mongoose = require('mongoose');
var DB_URL = "mongodb://neoris:neoris2018@ds245762.mlab.com:45762/cryptobabies"

// Makes connection asynchronously.  Mongoose will queue up database
// operations and release them when the connection is complete.
mongoose.connect(DB_URL, {   
    useNewUrlParser: true 
}, function (err, res) {
    if (err) {
        console.log ('ERROR connecting to: ' + DB_URL + '. ' + err);
    } else {
        console.log ('Succeeded connected to: ' + DB_URL);
    }
});

mongoose.set('useCreateIndex', true);
