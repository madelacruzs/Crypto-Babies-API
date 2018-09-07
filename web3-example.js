var Web3 = require('web3');

var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

// -------------------------------------
// DEFINICION DE METODOS WEB3
// -------------------------------------


var methods = {};

methods.getAccounts = function(){
    web3.eth.getAccounts(function(error, result) {
        if(error != null)
            console.log("Couldn't get accounts'");
       console.log(result)
    });
}

exports.data = methods;

methods.getAccounts();

// http://127.0.0.1:8545
