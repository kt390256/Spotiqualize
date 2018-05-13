
const queriesController = require('./queriesController');
const models = require('../models');

//Display add page
module.exports.showAddAlbum = function(req,res){
    res.render('newAlbum', {title: 'Add Artist'});
}

//add a new Artist
module.exports.addAlbum = function(req, res){

//give some variable
  let Album;
  let albumName = req.body.albumName;

//creates new Artist
  Album = new models.Album({
    albumName : albumName
  });

//save new Artist
  Album.save((err) => {
    if(err) {return res.send('err');}
    else{}
});

  //console.log("This is what you just pushed: " ,Artist.name);

//when you module export you have to return;
  return res.redirect('/');

}
