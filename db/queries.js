
//this file responsible for grabbing stuffs from the db

const artist = require('../models').Artist;
const album = require('../models').Album;
const feature_artist = require('../models').FArtist;
const song = require('../models').Song;


const dbGetArtistName = () => {

  return artist.findAll().then(data => {return data;} )
                         .catch(err => {console.log(err)});
};

const dbGetAlbumName = () => {

  return album.findAll().then(data => {return data;} )
                         .catch(err => {console.log(err)});
}

const dbGetFeatureArtistName = () => {

  return feature_artist.findAll().then(data => {return data;} )
                         .catch(err => {console.log(err)});
}

const dbGetSongName = () => {

  return song.findAll().then(data => {return data;} )
                         .catch(err => {console.log(err)});
}

module.exports = {

  dbGetArtistName,
  dbGetAlbumName,
  dbGetFeatureArtistName,
  dbGetSongName

}
