
const queriesController = require('./queriesController');
const models = require('../models');

//Display add page
module.exports.showAddSong = function(req,res){
    res.render('newSong', {title: 'Add Artist'});
}

//add a new Artist
module.exports.addSong = function(req, res){

//give some variable
  let Song;
  let songName = req.body.songName;
  let albumName = req.body.albumName;
  let artistName = req.body.artistName;
  let img = req.body.image;
//creates new Artist
//models.the first parameter of sequelize define
  Song = new models.Song({
    songName : songName,
    albumName : albumName,
    artistName : artistName,
      url: img
  });

//save new Artist
  Song.save((err) => {
    if(err) {return res.send('err');}
    else{}
});

  //console.log("This is what you just pushed: " ,Artist.name);

//when you module export you have to return;
  return res.redirect('/');

}
