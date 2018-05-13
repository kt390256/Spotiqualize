
const queriesController = require('./queriesController');
const models = require('../models');

//Display add page
module.exports.showAddArtist = function(req,res){
    res.render('newArtist', {title: 'Add Artist'});
}

//add a new Artist
module.exports.addArtist = function(req, res){

//give some variable
  let Artist;
  let artistName = req.body.artistName;

//creates new Artist
  Artist = new models.Artist({
    artistName : artistName
  });

//save new Artist
  Artist.save((err) => {
    if(err) {return res.send('err');}
    else{}
});

  //console.log("This is what you just pushed: " ,Artist.name);

//when you module export you have to return;
  return res.redirect('/');

}
