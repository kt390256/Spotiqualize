
const queriesController = require('./queriesController');
const models = require('../models');

//Display add page
module.exports.showAddFA = function(req,res){
    res.render('newFeatureArtist', {title: 'Add Artist'});
}

//add a new Artist
module.exports.addFA = function(req, res){

//give some variable
  let FA;
  let faName = req.body.feature_artist;

//creates new Artist
//models.the first parameter of sequelize define
  FA = new models.FArtist({
    faname : faName
  });

//save new Artist
  FA.save((err) => {
    if(err) {return res.send('err');}
    else{}
});

  //console.log("This is what you just pushed: " ,Artist.name);
//when you module export you have to return;
  return res.redirect('/');

}
