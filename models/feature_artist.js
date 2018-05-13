

'use strict'
module.exports = (sequelize, DataTypes) => {


  //creates the album model
  var FA = sequelize.define('FArtist', {
    faname: DataTypes.STRING,
  }); //end of sequelize.define

    return FA;

};
