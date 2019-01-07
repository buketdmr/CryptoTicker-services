var express = require('express');
var request = require('request');

var router = express.Router();

_EXTERNAL_URL  = 'http://coincap.io/page/'

/* GET currencyRate */

router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  console.log('Get Rates for: ' + id);
  
  request ({
    uri: _EXTERNAL_URL + id, 
    qs : { 
      api_key:'11',
      query:'asd'
    }
    
  }).pipe(res);
 
});

module.exports = router;
