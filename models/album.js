

'use strict'
module.exports = (sequelize, DataTypes) => {


  //creates the album model
  var Album = sequelize.define('Album', {
    albumName: DataTypes.STRING,
    date: DataTypes.STRING
  }); //end of sequelize.define

    return Album;

};
