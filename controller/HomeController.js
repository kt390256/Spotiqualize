
const queriesController = require('./queriesController');
const artistController = require('./ArtistController')

//display everythng
module.exports.getEverything = function(req, res, next){

  let artist;
  let album;
  let featureArtist;
  let song;
  //Only 1 : call retrieve function => res.render
  //2 and above: call retrieve function =>  return => call retrieve function => res.render

queriesController.getSongName()
.then(Song => {
  song = Song;
  return song;
}).catch(err => {console.log("Coming from home controller ", err)});


//grab artist names
  queriesController.getArtistNames()
  .then(Artist => {
    artist = Artist;
    return Artist;
  }).catch(err => {console.log("Coming from home controller ", err)});

//grab feature artist name
  queriesController.getFeatureArtistName()
  .then(FA =>  {
     featureArtist = FA;
    return featureArtist}).catch(err => {console.log("Coming from home controller ", err)});

//get album name
  queriesController.getAlbumName()
        .then(album =>
          {
          res.render('home',{artist: artist, album:album, fa: featureArtist, song: song}
        )
      }).catch(err => {console.log("Coming from home controller ", err)});

}
