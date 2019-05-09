var express = require('express');
var router = express.Router();
const Mail = require('../schema')

router.post('/mail', function(req, res){
    var mail = {
         mailFrom: req.body.emailFrom,
         mailTo: req.body.emailTo,
         message: req.body.message
    }

  
    insertMail.then(function(){
        var _m = new Mail(mail);
        _m.save(function(err, user){
            if(err){
                res.status(500).json({
                    "text": "Erreur interne"
                })
            } else {
                res.status(200).json({
                    "text": "Succès",
                })
            }
        })
    })
  })

  module.exports = router;