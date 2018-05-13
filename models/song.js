'use strict'

module.exports = (sequelize, DataTypes) =>{

  const Song = sequelize.define('Song', {
    songName: DataTypes.STRING,
    albumName: DataTypes.STRING,
    artistName: DataTypes.STRING,
    url: DataTypes.STRING
  });
   return Song;
}
