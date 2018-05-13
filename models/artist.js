
//Building artist model..

'use strict'
module.exports = (sequelize, DataTypes) => {


  var Artist = sequelize.define('Artist', {
    artistName: DataTypes.STRING
  }); //end of sequelize.define

    return Artist;

};
