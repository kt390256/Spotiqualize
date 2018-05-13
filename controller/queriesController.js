
//this file is responsible for grabbing stuffs from the queries file

const queries = require('../db/queries');

module.exports.getArtistNames = () => {

  return queries.dbGetArtistName().then(data => {return data;})
                                  .catch(err => {console.log(err)})
}


module.exports.getAlbumName = () => {

  return queries.dbGetAlbumName().then(data => {return data;})
                                 .catch(err => {console.log(err)})
}


module.exports.getFeatureArtistName = () => {

  return queries.dbGetFeatureArtistName().then(data => {return data;})
                                       .catch(err => {console.log(err)})
}

module.exports.getSongName = () => {

  return queries.dbGetSongName().then(data => {return data;})
                                       .catch(err => {console.log(err)})
}
