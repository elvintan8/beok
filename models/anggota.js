'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class anggota extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  anggota.init({
    namalengkap: DataTypes.STRING,
    namabuddhis: DataTypes.STRING,
    tempatlahir: DataTypes.STRING,
    tanggallahir: DataTypes.DATE,
    jeniskelamin: DataTypes.ENUM("L","P"),
    pendidikan: DataTypes.STRING,
    fakultas: DataTypes.STRING,
    angkatantahunajaran: DataTypes.STRING,
    pekerjaan: DataTypes.STRING,
    golongandarah: DataTypes.STRING,
    hobi: DataTypes.STRING,
    alamatlengkap: DataTypes.STRING,
    aktifdivihara: DataTypes.STRING,
    nohp: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'anggota',
  });
  return anggota;
};